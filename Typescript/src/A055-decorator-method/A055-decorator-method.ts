/**
 * DECORATOR
 * METHODS
 */
function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | any {
  // Ou retorno pode ser um Property Descriptor
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: (...args: any[]) => {
      return args[0].toUpperCase();
    },
    writable: false,
  };
}

export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.firstName} ${this.lastName}: ${msg}`;
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

const person = new Person('Luiz', 'Otaviozzzzz', 30);
const method = person.method('Hello world!');
console.log(method);
