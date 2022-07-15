/**
 * MÉTODO PUBLIC
 * É acessível dentro da classe
 * É acessível fora da classe
 * E em todas as subclassses dessa class
 */

/**
 * MÉTODO PRIVATE
 * É acessível dentro da classe (somente)
 */

export class Company {
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public readonly name: string;
  private readonly cnpj: string;
  protected readonly employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee.firstName, employee.lastName);
    }
  }

  public getNome(): string {
    // Nesse caso é redundante, por conta do atributo ser Public
    return this.name;
  }
}

export class Employee {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Company('Imobiliária Fachada', '11.111.111/0001-11');
const employee1 = new Employee('Alvin', 'Esquilo');
const employee2 = new Employee('Lima', 'Gustavo');
const employee3 = new Employee('Neymar', 'Do relmas');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3);
