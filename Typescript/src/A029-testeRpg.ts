/* Mini-sistema de combate "RPG"
 * Feito para testar funcionamento de classe abstrata, interfaces
 * OBS: Batalha épica f kadum nt
 */

// character interface attributes
interface CharacterInterface {
  nick: string;
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
  description: string;
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
    this.nick = characterInterface.nick;
    this.ad = characterInterface.ad;
    this.ap = characterInterface.ap;
    this.def = characterInterface.def;
    this.hp = characterInterface.hp;
  }

  protected nick: string;
  protected ad: number;
  protected ap: number;
  protected def: number;
  protected hp: number;

  abstract equipment: EquipmentInterface;

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

  equipItem(item: Item): void {
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
  constructor(protected itemInterface: ItemInterface) {
    this.name = itemInterface.name;
    this.description = itemInterface.description;
  }

  name: string;
  description: string;
}

class Weapon extends Item {
  constructor(
    protected itemInterface: ItemInterface,
    protected weaponInterface: WeaponInterface,
  ) {
    super(itemInterface);
    this.ad = weaponInterface.ad;
    this.ap = weaponInterface.ap;
  }

  protected ad: number;
  protected ap: number;

  get _ad(): number {
    return this.ad;
  }

  get _ap(): number {
    return this.ap;
  }
}

class Armor extends Item {
  constructor(itemInterface: ItemInterface, armorInterface: ArmorInterface) {
    super(itemInterface);
    this.def = armorInterface.def;
  }

  protected def: number;

  get _def(): number {
    return this.def;
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
