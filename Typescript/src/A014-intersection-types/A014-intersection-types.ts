// INTERSECTION TYPES

// "Não é tão utilizado quanto o union types"
// union types -> | OR
// intersection types -> & AND

type HasFirstName = { firstName: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

// Combinar os tipos para fazer um novo tipo
// NÃO RECOMENDADO
type Person = HasFirstName | HasLastName | HasAge; // OR
// Pessoa PODE ter nome, PODE ter sobrenome OU PODE ter idade

const person: Person = {
  age: 20,
  lastName: 'Tico',
};

type Person2 = HasFirstName & HasLastName & HasAge; // AND
// Pessoa PRECISA ter nome, PRECISA ter sobrenome, E PRECISA ter idade
const person2: Person2 = {
  age: 23,
  firstName: 'Elma',
  lastName: 'Maria',
};

// OUTRO MODO (geralmente pouco usado, mas útil)
// Imaginar os tipos como CONJUNTOS
// Conjunto AB tem A e tem B
type AB = 'A' | 'B';
// Conjunto AC tem A e tem C
type AC = 'A' | 'C';
// Conjunto AD tem A e tem D
type AD = 'A' | 'D';
// o intersection type dos conjuntos AB e AC é 'A'
type Intersection = AB & AC & AD; // Intersection === "A"

export default person;
