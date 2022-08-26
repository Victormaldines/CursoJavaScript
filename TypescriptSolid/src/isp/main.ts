/**
 * Interface Segregation Principle (Isp)
 *
 * Os clientes não devem ser forçados a depender de type, interfaces e membros abstratos que não utilizam.
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { IndividualCustomer, InterpriseCustomer } from './classes/customer';

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

const individualCustomer = new IndividualCustomer(
  'Luiz',
  'Otaviao',
  '123.123.123-22',
);

const interpriseCustomer = new InterpriseCustomer(
  'Imobiliária Faxada',
  '1.222.333/0001-1',
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  interpriseCustomer,
);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
