export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
  //if (typeof a === 'number' && typeof b === 'number') return a + b;
  //return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 2));
console.log(add('a', 'b'));

// declaração de tipos sem a chave <type>
// type Person = { name: string }
// type Animal = { color: string }

// inclusão da chave <type> para futuro controle
type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function getName(obj: PersonOrAnimal) {
  // operador 'in' para verificar a existência do atributo <name> no objeto
  // if ('name' in obj) return obj.name;
  // verifica se o objeto é uma instância de Student (que possui o atributo name)
  //if (obj instanceof Student) return obj.name;

  // checagem de tipo com switch()
  switch (obj.type) {
    case 'person':
      return obj.name;
    case 'animal':
      return obj.color;
  }
}

console.log(getName(new Student('Chimbinha')));
console.log(getName({ type: 'animal', color: 'red' }));

export default true;
