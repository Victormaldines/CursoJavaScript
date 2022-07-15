// Diagrama UML Criado no site: https://www.yworks.com/yed-live/
// https://prnt.sc/oFED6fFbXG3r

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends Person {
  getFullName(): string {
    // overwriting de função
    return `It returns from student: ${this.firstName} ${this.lastName}`;
  }
}
export class Customer extends Person {
  getFullName(): string {
    return `It returns from customer ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Xand', 'Avião', 42, '888.000.222-11');
const student = new Student('Pelé', 'O rei forget', 30, '000.000.000-00');
const customer = new Customer('Messi', 'Hola que tal', 12, '000.111.222-33');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(customer.getFullName());

const studentsList: Person[] = [];

studentsList.push(student);
console.log(studentsList);
