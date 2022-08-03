interface PersonProtocol<T = string, U = number> {
  firstName: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  firstName: T;
  lastName: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  firstName: 'hollow',
  lastName: 'knight',
  age: 3,
};

const student2: PersonProtocol2<number, number> = {
  firstName: 20,
  lastName: 40,
  age: 2,
};

const student3: PersonProtocol = {
  firstName: 'Pure',
  lastName: 'Vessel',
  age: 4,
};

console.log(student1, student2, student3);
