// Agregação
/**
 * "Quando uma classe depende MUITO de outra class, apesas dessa outra classe não ser essencial"
 *
 * Exemplo diagrama (yEd live):
 * https://prnt.sc/eyNlm8RjqEnU
 */

export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityOfProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((acc, prod) => (acc += prod.price), 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Shirt', 49.9);
const product2 = new Product('Mug', 4.9);
const product3 = new Product('Pen', 1.9);
const shippingCart = new ShoppingCart();

shippingCart.insertProducts(product1, product2, product3);

console.log(shippingCart.totalValue());
console.log(shippingCart.quantityOfProducts());
