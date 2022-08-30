import { CartItem } from './interfaces/cart-item'; // interface (protocolo)
import { Discount } from './discount'; // classe abstrata (protocolo)
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol'; // interface (protocolo)

export class ShoppingCart implements ShoppingCartProtocol {
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
    /**
     * this.discount.calculate()
     * funciona de maneira polimórfica:
     * Porque "Eu espero que qualquer Discount tenha o método calculate e que faça o cálculo
     * de acordo com o método"
     * "Esperar que algo se comporte de maneiro polimórfica"
     */

    return this.discount.calculate(this.total());

    /* Se eu preciso checar o tipo do retorno de uma função de uma classe criada, em algum
     * momento o Lsp (Liskov Substitution Principle) está sendo quebrado
     */
    //const result = this.discount.calculate(this.total());
    // if (typeof result === 'number') return result;
    // return this.total();
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
