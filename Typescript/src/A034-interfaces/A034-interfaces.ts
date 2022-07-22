/**
 * INTERFACES
 *
 * Interfaces são parecidas com type alias ("99% dos casos")
 * vantagem type:
 *  Possibilidade de fazer um tipo simples
 *
 * Diferença:
 *  Geralmente, se usa interface para MODELAGEM DE CLASSES (POO)
 *
 * QUAL REALMENTE UTILIZAR? tanto faz
 */

// Syntaxe da declaração de interface é parecida com a de uma classe
interface FirstNameInterface {
  firstName: string;
}

interface LastNameInterface {
  lastName: string;
}

interface GetFullNameInterface {
  getFullName(): string;
}

// interface <idInterface> extends <...tipos> {}
// em interface, o extends, é interpretado com um tipo (possível extender várias interfaces)
// ~> em Classe, somente é possível extender APENAS UMA  classe
interface PersonInterface
  extends FirstNameInterface,
    LastNameInterface,
    GetFullNameInterface {}

// type PersonType = FirstNameType & LastNameType & GetFullNameType; // intersection (union)

export class Person implements PersonInterface {
  constructor(public firstName: string, public lastName: string) {}
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Sandy', 'Junior');

const personObj: PersonInterface = {
  firstName: 'a',
  lastName: 'b',
  getFullName: function (): string {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());
console.log(personObj.getFullName());
