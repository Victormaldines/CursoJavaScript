/* Mini-sistema de combate "RPG"
 * Feito para testar funcionamento de classe abstrata
 * OBS: Batalha épica f kadum nt
 */

export abstract class Character {
  constructor(
    protected nick: string,
    protected ad: number,
    protected ap: number,
    protected def: number,
    protected hp: number,
  ) {}

  abstract equipment: { weapon: Weapon; armor: Armor };

  attack(character: Character): void {
    const skill = this.ad >= this.ap ? this.ad : this.ap;
    const damage = skill - character.def > 0 ? skill - character.def : 0;

    if (character.hp > 0) {
      character.loseHp(damage);
      console.log(`${this.nick} deals ${damage} damage to ${character.nick}`);
      console.log(`${character.nick} has now ${character.hp}`);
    }
    if (character.hp <= 0) {
      console.log(`${character.nick} is dead!`);
    }
  }

  loseHp(damage: number): void {
    this.hp -= damage;
  }

  equipItem(item: Item) {
    if (item instanceof Weapon) {
      this.equipment.weapon = item;
      this.ad = this.equipment.weapon._ad;
      this.ap = this.equipment.weapon._ap;
    }
    if (item instanceof Armor) {
      this.equipment.armor = item;
      this.def = this.equipment.armor._def;
    }
  }
}

class Item {
  constructor(protected name: string, protected description: string) {}
}

class Weapon extends Item {
  constructor(
    name: string,
    description: string,
    protected ad: number,
    protected ap: number,
  ) {
    super(name, description);
  }

  get _ad(): number {
    return this.ad;
  }

  get _ap(): number {
    return this.ap;
  }
}

class Armor extends Item {
  constructor(name: string, description: string, protected def: number) {
    super(name, description);
  }

  get _def(): number {
    return this.def;
  }
}

class Mage extends Character {
  equipment = {
    weapon: new Weapon('Common Staff', 'A common staff used by novices', 1, 2),
    armor: new Armor('Common Cloth', 'A common cloth used by newbies haha', 1),
  };
}

class Rogue extends Character {
  equipment = {
    weapon: new Weapon('Common Dagger', 'A dagger used to slice oranges', 2, 1),
    armor: new Armor('Common Cloth', 'A common cloth used by newbies haha', 1),
  };
}

const kadum = new Mage('Kadum Kadaum', 1, 2, 1, 15);
const belle = new Rogue('Belle Belinha', 2, 1, 1, 10);

/**
 * Nick: AD, AP, DEF, HP
 */

/**
 * START
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 1, 10
 */

kadum.attack(belle);
/**
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 1, 9
 */

kadum.attack(belle);
/**
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 1, 8
 */

belle.equipItem(new Armor('Armor plate', 'A good one', 2));
/**
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 2, 8
 */

kadum.attack(belle);
/**
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 2, 8
 */

kadum.equipItem(
  new Weapon('Uncommon Staff', 'Used by Gandalf when was 7', 1, 4),
);
/**
 * Kadum: 1, 4, 1, 15
 * Belle: 2, 1, 2, 8
 */

kadum.attack(belle);
/**
 * Kadum: 1, 2, 1, 15
 * Belle: 2, 1, 2, 6
 */

belle.equipItem(
  new Weapon('Hidden Blade', 'Nothing is true, everything is permitted', 32, 1),
);

/**
 * Kadum: 1, 2, 1, 15
 * Belle: 32, 1, 2, 6
 */

belle.attack(kadum);
/**
 * Kadum: 1, 2, 1, -16 *morreu* f ;-;
 * Belle: 32, 1, 2, 6
 */

belle.attack(kadum);
/**
 * Kadum: 1, 2, 1, -16 *já está morto*
 * Belle: 32, 1, 2, 6
 */
