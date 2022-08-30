/**
 * Dependency Inversion Principle (Dip)
 *
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
 * depender de abstrações.
 *
 * Dependa de abstrações (interfaces, types, classes abstratas...), não de
 * implementações (classes concretas).
 *
 *  // Alto nível / Baixo nível
 *    Depende, basicamente, das relações entre as classes (interfaces, types, ...)
 *
 *    ex.1:
 *    class Order {
 *      constructor(cart: ShoppingCart){}
 *    }
 *
 *    Order é de alto nível, ShoppingCart é de baixo nível
 *    "Porque Order não sabe fazer as coias que ShoppingCart faz"
 *
 *    ex.2:
 *      Quanto maior a abstração de uma classe, mais alto o nível dela na
 *      hierarquia da arquitetura
 *
 *    ex.3:
 *      Muito-alto nível ~> Interfaces
 *        "Interface não faz nada por sí só, apenas o que outras classes devem fazer"
 *
 *      Muito-baixo nível ~> Uma classe que implementa um método que faz alguma coisa
 *        "Porque é ela que faz a tarefa"
 *        Também conhecida como classe concreta
 *
 *
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 */

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';
import { Order } from './classes/order';
// import { Messaging } from './services/messaging';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';
import { Persistency } from './services/persistency';
import { IndividualCustomer } from './classes/customer';

import {
  FiftyPercentDiscount,
  //TenPercentDiscount,
  // NoDiscount,
} from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
// const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer(
  'Luiz',
  'Otaviao',
  '123.123.123-22',
);

/*
const interpriseCustomer = new InterpriseCustomer(
  'Imobiliária Faxada',
  '1.222.333/0001-1',
);
*/

/**
 * DIP aplica um principio muito útil para testes
 */
// classe mock que 'finge' ter o mesmo comportamento de uma classe especifica
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string) {
    console.log(`Message sended by MOCK: ${msg}`);
  }
}

const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  individualCustomer,
);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
