/**
 * DECORATORS
 * ORDEM DE CHAMADA DOS DECORATORS
 */

@reverseNameAndColor // é chamado na CRIAÇÃO DA CLASSE
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Class constructor');
  }
}

function reverseNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  console.log(`I am the decorator and recieved ${target}`);
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const monster = new Animal('Sukkalgir', 'white');
console.log(monster);
