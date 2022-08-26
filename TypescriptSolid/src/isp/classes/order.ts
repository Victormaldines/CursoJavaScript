import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // Injeção de dependências: para a classe Order delegar os serviços
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty.');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your order was received. Total price: ${this.cart.totalWithDiscount()}`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `O cliente é: ${this.customer.getName()}, o IDN é: ${this.customer.getIDN()}`,
    );
  }
}
