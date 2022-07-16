/**
 * atributos/métodos estáticos não são acessíveis por meio de intância de classe
 * ou seja, atributos/métodos estáticos só podem ser acessados por meio das próprias classes
 * Ex.: Person.sayHi();
 *
 * Não possuem acesso aos atributos/métodos da própria classe (this)
 *
 * Ex.:   public name = 'sla';
 *        static getName(): string {
 *          return this.name; <~~ ERRO
 *        }
 *
 * atributos/métodos estáticos não são acessíveis pelo operador 'this'
 *
 * Ex.: static age = 12;
 *      this.age; <~~ ERRADO
 *      NomeClasse.age <~~ CERTO
 */

export class Person {
  // atributos estáticos
  static defaultAge = 0; // Não é acessível pelo 'this'
  static defaultCpf = '000.000.000-00';

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  commonMethod(): void {
    console.log(Person.defaultAge);
  }

  // método estático
  static createPerson(firstName: string, lastName: string): Person {
    return new Person(
      firstName,
      lastName,
      Person.defaultAge, // Utilizando atributos estáticos da classe
      Person.defaultCpf, // Utilizando atributos estáticos da classe
    );
  }
}

const person1 = new Person('Patatá', 'DaUmAFAquinah', 11, '333.333.222-11');
const person2 = Person.createPerson('Pamatá', 'blindado por deus');

console.log(person1);
console.log(person2);
person2.commonMethod();
console.log(Person.defaultAge, Person.defaultCpf);
