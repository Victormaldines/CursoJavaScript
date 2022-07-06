/* eslint-disable */

// TYPE ANNOTATIONS

// <var>:<T>;
// identificador-variavel: type-annotation;

// Tipos básicos
// São definidos (a maioria) com letra inicial minúscula

let nome: string = 'Kadum Kadaum'; // Qualquer tipo de strings
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o774 ---- Respectivamente: int, float, float-neg, hex, bin, oct
let adulto: boolean = true; // true ou false. OBS: Não considera valores truthy (x != 0) ou falsy (0, undefined, null...)
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Tipos passados por referência (ex. Arrays e Objetos)
// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [4, 5, 6];
let arrayDeStrings: Array<string> = ['Imperial', 'Furia', 'Loud'];
let arrayDeStrings2: string[] = ['Natus Vincere', 'Ninja In Pijamas'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = { // ? == Valor é opcional
  idade: 30,
  nome: 'Kadum Kadaum'
};

// Funções (tipagem de parâmetro com retorno)
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y
}
