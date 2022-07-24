/* Mini-sistema de combate "RPG"
 * Feito para testar funcionamento de classe abstrata, interfaces
 * OBS: Batalha épica f kadum nt
 */

// character interface attributes
interface CharacterInterface {
  readonly nick: string;
  ad: number;
  ap: number;
  def: number;
  hp: number;
}

// character interface methods
interface CharacterMethodsInterface {
  attack(character: Character): void;
  loseHp(damage: number): void;
  equipItem(item: Item): void;
}

// equipment interface
interface EquipmentInterface {
  weapon: Weapon;
  armor: Armor;
}

// item interfaces
interface ItemInterface {
  name: string;
  readonly description: string;
}

interface WeaponInterface {
  ad: number;
  ap: number;
}

interface ArmorInterface {
  def: number;
}

export abstract class Character implements CharacterMethodsInterface {
  constructor(protected characterInterface: CharacterInterface) {
    this._nick = characterInterface.nick;
    this._ad = characterInterface.ad;
    this._ap = characterInterface.ap;
    this._def = characterInterface.def;
    this._hp = characterInterface.hp;
  }

  protected _nick: string;
  protected _ad: number;
  protected _ap: number;
  protected _def: number;
  protected _hp: number;

  abstract equipment: EquipmentInterface;

  attack(character: Character): void {
    const skill = this._ad >= this._ap ? this._ad : this._ap;
    const damage = skill - character.def > 0 ? skill - character.def : 0;

    if (character.hp > 0) {
      character.loseHp(damage);
      console.log(`${this._nick} deals ${damage} damage to ${character.nick}`);
      console.log(`${character.nick} has now ${character.hp}`);
    }
    if (character.hp <= 0) {
      console.log(`${character.nick} is dead!`);
    }
  }

  loseHp(damage: number): void {
    this._hp -= damage;
  }

  equipItem(item: Item): void {
    if (item instanceof Weapon) {
      this.equipment.weapon = item;
      this._ad = this.equipment.weapon.ad;
      this._ap = this.equipment.weapon.ap;
    }
    if (item instanceof Armor) {
      this.equipment.armor = item;
      this._def = this.equipment.armor.def;
    }
  }

  get nick(): string {
    return this._nick;
  }

  get ad(): number {
    return this._ad;
  }

  get ap(): number {
    return this._ap;
  }

  get def(): number {
    return this._def;
  }

  get hp(): number {
    return this._hp;
  }
}

class Item {
  constructor(protected itemInterface: ItemInterface) {
    this._name = itemInterface.name;
    this._description = itemInterface.description;
  }

  protected _name: string;
  protected _description: string;

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}

class Weapon extends Item {
  constructor(
    protected itemInterface: ItemInterface,
    weaponInterface: WeaponInterface,
  ) {
    super(itemInterface);
    this._ad = weaponInterface.ad;
    this._ap = weaponInterface.ap;
  }

  protected _ad: number;
  protected _ap: number;

  get ad(): number {
    return this._ad;
  }

  get ap(): number {
    return this._ap;
  }
}

class Armor extends Item {
  constructor(
    protected itemInterface: ItemInterface,
    protected armorInterface: ArmorInterface,
  ) {
    super(itemInterface);
    this._def = armorInterface.def;
  }

  protected _def: number;

  get def(): number {
    return this._def;
  }
}

class Mage extends Character {
  equipment = {
    weapon: new Weapon(
      {
        name: 'Common Staff',
        description: 'A common staff used by novices',
      },
      {
        ad: 1,
        ap: 2,
      },
    ),
    armor: new Armor(
      {
        name: 'Common Cloth',
        description: 'A common cloth used by newbies haha',
      },
      {
        def: 1,
      },
    ),
  };
}

class Rogue extends Character {
  equipment = {
    weapon: new Weapon(
      {
        name: 'Common Dagger',
        description: 'A dagger used to slice oranges',
      },
      {
        ad: 2,
        ap: 1,
      },
    ),
    armor: new Armor(
      {
        name: 'Common Cloth',
        description: 'A common cloth used by newbies haha',
      },
      {
        def: 1,
      },
    ),
  };
}

const kadum = new Mage({
  nick: 'Kadum Kadaum',
  ad: 1,
  ap: 2,
  def: 1,
  hp: 15,
});

const belle = new Rogue({
  nick: 'Belle Belinha',
  ad: 2,
  ap: 1,
  def: 1,
  hp: 10,
});

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

belle.equipItem(
  new Armor(
    {
      name: 'Armor plate',
      description: 'A good one',
    },
    {
      def: 2,
    },
  ),
);
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
  new Weapon(
    {
      name: 'Uncommon Staff',
      description: 'Used by Gandalf when was 7',
    },
    {
      ad: 1,
      ap: 4,
    },
  ),
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
  new Weapon(
    {
      name: 'Hidden Blade',
      description: 'Nothing is true, everything is permitted',
    },
    {
      ad: 32,
      ap: 1,
    },
  ),
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

console.log(belle.equipment.weapon.name);
console.log(belle.equipment);
