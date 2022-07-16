export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected _cpf: string,
  ) {
    // this.cpf = '222.222.111-33'; chamando setter no construtor
  }

  // Maneira correta atualmente
  set cpf(cpf: string) {
    console.log('SETTER CALLED');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CALLED');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Patati', 'O paiaço', 30, '123.456.789-00');
person.cpf = '111.123.456-00'; // Ao utilizar o operador de atribuição, o javascript invoca o método set da classe
console.log(person.cpf); // Ao chamar o atributo, o javascript invoca o método get da classe
