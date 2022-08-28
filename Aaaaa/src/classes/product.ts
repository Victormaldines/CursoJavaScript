import { CartItem } from './interfaces/cart-item'; // interface (protocolo)
export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
