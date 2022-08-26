// Nenhuma das dependências é concreta, todas são interfaces.
import { OrderStatus } from './interfaces/order-status'; // interface (protocolo)
// import { ShoppingCart } from './shopping-cart';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol'; // interface (protocolo)
// import { Messaging } from '../services/messaging';
import { MessagingProtocol } from './interfaces/messaging-protocol'; // interface (protocolo)
// import { Persistency } from '../services/persistency';
import { PersistencyProtocol } from './interfaces/persistency-protocol'; // interface (protocolo)
import { CustomerOrder } from './interfaces/customer-protocol'; // interface (protocolo)

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // Injeção de dependências: para a classe Order delegar os serviços
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
