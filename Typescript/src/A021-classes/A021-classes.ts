// DEFINIÇÃO DE CLASSES
// Forma longa

export class Company {
  public readonly name: string; // modificador de acesso padrão -> PUBLIC (não necessário declarar)
  private readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee.firstName, employee.lastName);
    }
  }
}

// Forma concisa
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

company1.showEmployees();
