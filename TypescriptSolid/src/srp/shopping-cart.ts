type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    // + <- Converte o retorno para Number
    return +this._items
      .reduce((acc, item) => (acc += item.price), 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty.');
      return;
    }

    this.orderStatus = 'closed';
    this.sendMessage(`Your order was received. Total price: ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Your sent message: ${msg}`);
  }

  saveOrder(): void {
    console.log('Order saved successfully');
  }

  clear(): void {
    console.log('Shopping cart is empty');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  set orderStatus(status: OrderStatus) {
    this._orderStatus = status;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'T-shirt', price: 49.9 });
shoppingCart.addItem({ name: 'Notebook', price: 9.9 });
shoppingCart.addItem({ name: 'Pencil', price: 1.59 });

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
