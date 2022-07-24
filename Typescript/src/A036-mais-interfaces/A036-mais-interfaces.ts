// Interface merge
interface Person {
  firstName: string;
}

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly adresses: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  firstName: 'a',
  lastName: 'b',
  adresses: ['c'],
  age: 30,
};

console.log(person.age);
