// TYPE ASSERTION
// "basicamente, um type casting -> conversão de tipos"

/* RECOMENDADO */
// CONDICIONAL (Elemento pode ou não existir)
const body1 = document.querySelector('body'); // pode ser um HTMLBodyElement | null
if (body1) body1.style.background = 'red';

// AFIRMAR QUE O ELEMENTO EXISTE
// ! -> Non-null assertion (não recomendado)
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';

// as <Type> -> Type assertion (recomendado)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'green';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement; // Afirmando qual é o elemento buscado pela .querySelector('<classe>')
input.value = 'Qualquer coisa';
input.focus();

/* NÃO RECOMENDADO */
// TYPE ASSERTION NÃO FUNCIONA EM TODOS OS CASOS (TIPOS):
// const body4 = document.querySelector('body') as number; // ERRO: number !== HTMLBodyElement
// body4.style.background('purple');

// Funciona, mas improvável de implementação útil
// const body5 = document.querySelector('body') as unknown as number;
// body5.style.background('orange');
