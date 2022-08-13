/**
 * DECORATOR
 * PROPERTY
 *
 * Acesso ao property descriptor
 * Possibilidade de criar Getters ou Setters
 */

function decorator(classPrototype: any, propertyName: string | symbol): any {
  console.log(classPrototype);
  console.log(propertyName);
  let propertyValue: any;
  return {
    // propertyDescripton (writable, enumerable, configurable...)
    // + get | set da propriedade
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  @decorator
  firstName: string;
  @decorator
  lastName: string;
  @decorator
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.firstName} ${this.lastName}: ${msg} ${this.age}`;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.firstName = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new Person('Luiz', 'Otavio', 30);
console.log(person.method('Hello World'));
