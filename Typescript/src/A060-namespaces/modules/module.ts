/**
 * NAMESPACE
 * São "módulos" do Typescript, apesar de tudo, é altamente recomendado utilizar os sistema de módulos do ES6 (ES2015)
 */
/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
  export const name = 'Ugabuga';

  // export ~> exporta para fora do escopo da namespace
  export class Person {
    constructor(public name: string) {}
  }

  const person = new Person('Udyr');
  console.log(person);

  // Aninhando namespaces
  // para utilizar a namespace fora do escopo da "namespace pai", nesse caso, é preciso exportá-la
  export namespace OtherNamespace {
    export const name = 'Liminha';
  }
  console.log(OtherNamespace.name); // acessível sem export
}

// const person1 = new Person('Udyr'); // ~> não existe fora do escopo da namespace MyNamespace
const person1 = new MyNamespace.Person('Garen');
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name + ' Fora do namespace.'); // acessível com export

const namespaceConst = 'value of namespace const';
