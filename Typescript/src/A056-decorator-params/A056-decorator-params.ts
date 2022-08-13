/**
 * DECORATOR
 * PARAMETERS
 * Somente serve para assistir (console.log) ao que o parâmetro contém
 */

function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index); // posição do parâmetro no método
}

export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(
    @decorator firstName: string,
    @decorator lastName: string,
    @decorator age: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
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
