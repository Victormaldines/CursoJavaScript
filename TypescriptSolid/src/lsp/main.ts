/**
 * Liskov Substitution Principle
 *
 * Definição:
 * Liskov Substitution Principle (Princípio da substituição de Liskov) -
 * Se Φ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então Φ(y)
 * deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
 *
 * Mais simples: Substipos precisa ser substituíveis por seus tipos de base.
 * Definição do Luiz: Se meu programa espera um Animal, algo do tipo Dog
 * (que herda de Animal) seve servir como qualquer outro animal.
 *
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

import {
  FiftyPercentDiscount,
  //TenPercentDiscount,
  // NoDiscount,
} from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
