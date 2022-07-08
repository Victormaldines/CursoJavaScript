// UNION TYPES
// Quando há a possibilidade de mais de um valor específico suportado para determinada variável

function addOrConcat(a: number | string, b: number | string): number | string {
  // Union types não dispensam a verificação de tipo, em alguns casos
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));

export default true;
