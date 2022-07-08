// NULL e UNDEFINED
// Ambos representam um não-valor

// UNDEFINED ocorre quando um valor não é atribuído a uma variável
// NULL é explicitamente um valor nulo, atribuído a uma variável

let x;
if (typeof x === 'undefined') x = 20;

console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  if (typeof lastName === 'undefined') lastName = '';

  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  // O TypeScript reconhece a checagem de tipo null no escopo do 'if', autorizando a equação feita no escopo do 'else'
  console.log(squareOfTwoNumber, squareOfTwoNumber * 2);
}

console.log(squareOfTwoNumber, squareOfTwoString);

export default true;
