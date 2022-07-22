/*
Classe abstrata que é convertida em type

export abstract class PersonType {
  protected abstract firstName: string;
  protected abstract lastName: string;
  protected abstract getFullName(): string;
}
*/

// Os tipos (e interfaces) não possuem modificadores de acesso (public, protected, private)
// São utilizados apenas para definir atributos e métodos que estarão em classes que os implementarão
type PersonType = {
  firstName: string;
  lastName: string;
  getFullName(): string; // ou getFullName: () => string; "atributo que retorna uma função que retorna string"
};

// É possível implementar mais de um tipo/interface
type MiddleNameType = {
  middleName: string;
};

// com tipo, utilizamos o IMPLEMENTS
export class Person implements PersonType, MiddleNameType {
  constructor(
    public firstName: string,
    public lastName: string,
    public middleName: string,
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Lima', 'May', 'Tuldo');
console.log(person.getFullName);
