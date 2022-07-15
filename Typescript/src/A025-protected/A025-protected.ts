// PROTECTED

/**
 * MÉTODO PUBLIC
 * É acessível dentro da própria classe
 * É acessível fora da classe
 * E em todas as subclasses dessa class
 */

/**
 * MÉTODO PRIVATE
 * É acessível dentro da própria classe (somente)
 */

/**
 * PROTECTED
 * É acessível dentro da própria classe
 * É acessível em todas as subclasses dessa class
 */

export class Company {
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public readonly name: string;
  protected readonly employees: Employee[] = [];
  private readonly cnpj: string;

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.employees) {
      console.log(employee.firstName, employee.lastName);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }
}

export class Employee {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Udemy();
const employee1 = new Employee('Alvin', 'Esquilo');
const employee2 = new Employee('Lima', 'Gustavo');
const employee3 = new Employee('Neymar', 'Do relmas');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3);

const removedEmployee = company1.popEmployee();
console.log(removedEmployee);
