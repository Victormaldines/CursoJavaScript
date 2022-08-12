/**
 * DECORATORS
 * DECORATOR FACTORIES
 */

function reverseFirstAndLastName(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
      firstName: string;
      lastName: string;

      constructor(...args: any[]) {
        super(...args);
        this.firstName = this.reverse(args[0]);
        this.lastName = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return `${value.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}

@reverseFirstAndLastName('OPA', 'PARAMETROZINHO')
export class Person {
  constructor(public firstName: string, public lastName: string) {}
}

const person = new Person('Elma', 'Maria');
console.log(person);
