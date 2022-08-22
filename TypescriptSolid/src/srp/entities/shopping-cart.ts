// Single Responsibility Principle

import { CartItem } from './interfaces/cart-item';

/**
 * Princípio coesão de classes (Clean Code):
 * Quando uma classe classe utiliza os seus atributos
 * dentro de seus métodos ex.: f() { this.<attr> }
 */

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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
