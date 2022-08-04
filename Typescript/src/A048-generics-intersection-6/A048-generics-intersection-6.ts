// INTERSEÇÃO com generics
// O retorno da função retorna a interseção do obj1 com o obj2
export function uniteObjects<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 }; // com spread operator
  return Object.assign({}, obj1, obj2); // com Object.assign()
}

const obj1 = {
  chave1: 1,
};

const obj2 = {
  chave2: 2,
};

const union = uniteObjects(obj1, obj2);
console.log(union);
