/**
 * Generic Type com Classes
 * Implementando Pilha (Stack)
 */

export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

// Nesse caso, o Typescript não consegue inferir o tipo da classe
// porque não estamos recebendo nada no construtor que possa ser inferido no tipo genérico <T>
export class Stack<T> {
  private count = 0;
  // Objeto ~> Chaves são do tipo <number> e valor do tipo genérico <T>
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T {
    if (this.isEmpty()) throw new Error('stack is empty');

    this.count--;
    const temp = this.elements[this.count];
    delete this.elements[this.count];
    return temp;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const element in this.elements) {
      console.log(this.elements[element]);
    }
  }
}

// Nesse caso, o Typescript não consegue inferir o tipo da classe
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.showStack();
const element2 = stack.pop();
console.log(element2);
stack.showStack();
stack.pop();
stack.pop();
stack.pop();
