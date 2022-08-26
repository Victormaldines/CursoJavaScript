import { CartItem } from './interfaces/cart-item';
import { Discount } from './discount';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  // Injeção de dependências
  constructor(private readonly discount: Discount) {}

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

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Shopping cart is empty');
    this._items.length = 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}
