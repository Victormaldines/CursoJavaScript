// PREDICATE
// Predicate -> USADO QUANDO O RETORNO É UM BOOLEAN => value is number ~> true/false
// Desse modo, o typescript reconhece a checagem de tipo fora do escopo da função
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const result = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }
    return acc;
  }, 0);

  return result;
}

console.log(sum(1, 2, 3));
console.log(sum(...[1, 2, 3, 'a', 'b', 4, 5]));
console.log(sum('a', 'b', 'c'));
