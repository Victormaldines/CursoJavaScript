// Single Responsibility Principle

/**
 * Princípio coesão de classes (Clean Code):
 * Quando uma classe classe utiliza os seus atributos
 * dentro de seus métodos ex.: f() { this.<attr> }
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
