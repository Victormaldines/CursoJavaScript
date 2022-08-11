/* DECORATORS
 * "No typescript, são funções que são chamadas em determinados momentos do código"
 * "é um objeto impostor, ele finge ser o seu objeto, mas, 'no meio do caminho' ele pode 'decorar' (observar, modificar ou substituir) o seu objeto"
 */

@decorator // altera a classe abaixo com base no decorator criado (pode observar, editar, substituir o objeto)
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;
    name: string;

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

const animal1 = new Animal('Bisteca', 'orange');

console.log(animal1);
