import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  // Era um getter, aqui, se comporta como atributo
  items: Readonly<CartItem[]>;

  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
