// Singleton - GoF

export class Database {
  private static database: Database;

  private constructor(
    // Construtor privado ~> Perde o acesso ao 'new' Ex.: const x = new Database();
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Singleton | Factory Method - GoF
  static getDatabase(host: string, user: string, password: string): Database {
    if (!Database.database) {
      Database.database = new Database(host, user, password);
      console.log('New instance created');
    }
    console.log('returning already created instance');
    return Database.database;
  }
}

/**
 * SINGLETON (Design pattern)
 *
 * Quando eu tentar instanciar essa classe (Database)
 * eu quero que, ou essa classe me retorne a intancia que eu já tenho - criada anteriormente,
 * ou crie a instancia, caso não tenha nehuma criada anteriormente.
 */

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();

console.log(db1 === db2);
