// TIPO ARRAY

// generic types
// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulado, valor) => (acumulado *= valor), 1);
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((acumulado, valor) => (acumulado += valor), '');
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

const frase = concatenaStrings('Opa', 'Meu', 'Principe', 'Tudo', 'Certo?');
console.log(frase);

const dadosMaiusculos = toUpperCase('xinim', 'calango', 'luba');
console.log(dadosMaiusculos);

export default true;
