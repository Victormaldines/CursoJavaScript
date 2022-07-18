/**
 * Classes abstratas não são instanciadas
 * Basicamente, são feitas para serem extendidas, servindo como um "contrato"
 * suas subclasses extendem seus atributos e métodos
 */

export abstract class Character {
  constructor(
    protected name: string,
    protected attackDamage: number,
    protected healthPoints: number,
  ) {}

  // abstract items: string[];
  protected abstract icon: string;

  attack(character: Character): void {
    console.log(`${this.name} is attacking!`);
    this.defaultPhrase();
    character.loseHealthPoints(this.attackDamage);
  }

  loseHealthPoints(attackDamage: number) {
    this.healthPoints -= attackDamage;
    console.log(`${this.icon} ${this.name} has ${this.healthPoints} of HP!`);
  }

  abstract defaultPhrase(): void;
}

export class Mage extends Character {
  // private items: string[];
  protected icon = '\u{1F9DD}';

  defaultPhrase(): void {
    console.log(`${this.icon} hAHAhahaHAhaHAHahhaahAHAHhaHAaAAAAA`);
  }
}

export class Enemy extends Character {
  protected icon = '\u{1F9DF}';

  defaultPhrase(): void {
    console.log(`${this.icon} hablo mesmo :)`);
  }
}

const kadum = new Mage('Kadum Kadaum', 3, 9);
const enemy = new Enemy('Belle belinha', 2, 12);

enemy.attack(kadum);
kadum.attack(enemy);
enemy.attack(kadum);
kadum.attack(enemy);
enemy.attack(kadum);
kadum.attack(enemy);
enemy.attack(kadum);
kadum.attack(enemy);
