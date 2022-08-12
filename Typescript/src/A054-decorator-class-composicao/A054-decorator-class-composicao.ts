/**
 * DECORATORS
 * MÚLTIPLOS DECORATORS
 */

interface Constructor {
  new (...args: any[]): any;
}

@otherDecorator('A') // Segundo a ser chamado na criação da classe
@reverseTitleAndGenreDecorator('1', '2') // Primeiro a ser chamado na criação da classe
export class Movie {
  // Chamado ao instanciar a classe com o operador <new>
  constructor(public title: string, public genre: string) {
    console.log('I am the class');
  }
}

function reverseTitleAndGenreDecorator(param1: string, param2: string) {
  console.log('I am the reverseTitleAndGenreDecorator');
  return function Constructor(target: Constructor) {
    return class extends target {
      title: string;
      genre: string;
      constructor(...args: any[]) {
        super(...args);
        this.title = this.reverse(args[0]);
        this.genre = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return `${value.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log(`I am the other Decorator: ${param1}`);
    return target;
  };
}

const movie = new Movie('The sinister', 'Horror');
console.log(movie);
