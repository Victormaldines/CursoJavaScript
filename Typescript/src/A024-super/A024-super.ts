/**
 * SUPERCLASS (baseclass, parentclass)
 * é uma classe que está acima da hierarquia da classe
 *
 * Ex.:
 * Superclass         Subclass
 * class Person <|- class Student
 *            extends
 */

/**
 * SUPER
 * Utilizado quando precisamos ter acesso, a partir da SUBCLASS, a algo da SUPERCLASS (attr, methods...)
 */

export class Person {
  // SUPERCLASS
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends Person {
  // forma longa (3/3)
  classroom2: string;

  constructor(
    firstName: string, // recebe o valor pelo método Super()
    lastName: string, // recebe o valor pelo método Super()
    age: number, // recebe o valor pelo método Super()
    cpf: string, // recebe o valor pelo método Super()
    // forma curta
    public classroom: string, // recebe o valor pelo próprio construtor do Aluno (this.classroom)
    // forma longa (1/3)
    classroom2: string,
  ) {
    super(firstName, lastName, age, cpf); // Recebe os parâmetros do construtor da Superclass (Person)
    // forma longa (2/3)
    this.classroom2 = classroom2;
  }

  getFullName(): string {
    // overwriting de função
    console.log('Doing something before');
    const result = super.getFullName(); // atribui à uma variável o retorno de Person.getFullName()
    return `${result} SHEEEESH`;
  }
}
export class Customer extends Person {
  getFullName(): string {
    return `It returns from customer ${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Xand', 'Avião', 42, '888.000.222-11');
const student = new Student(
  'Kira',
  'HmhmhMHm livrinho',
  30,
  '000.000.000-00',
  '0001',
  '0007',
);
const customer = new Customer(
  'Jorji',
  'Jorji falsificar passaporte',
  12,
  '000.111.222-33',
);

console.log(student.getFullName());
console.log(student);
