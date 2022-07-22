/**
 * Diagrama criado no yEd Live
 * https://prnt.sc/oVWYbUVNans4
 *
 * Resumo dos tipos de relação:
 * Associação:
 *  Utilizamos quando queremos dizer que uma classe está relacionada (usa) outra classe
 * Agregação:
 *  Utilizamos quando queremos dizer que uma classe é fortemente dependente (x precisa de y) de outra classe
 * Composição:
 *  Indica que uma classe tem outra classe como parte dela
 * "Classe x só vai ser criada se a classe y também for criada"
 *  Ex.: Carro e motor. Ser humano e coração
 */

export class Car {
  // relação de composição
  // motor (Engine) está sendo criado dentro do carro (Car)
  private readonly engine: Engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  turnOff(): void {
    this.engine.turnOff();
  }

  stop(): void {
    this.engine.stop();
  }

  accelerate(): void {
    this.engine.accelerate();
  }
}

export class Engine {
  turnOn(): void {
    console.log('the engine is on...');
  }

  turnOff(): void {
    console.log('the engine is off...');
  }

  stop(): void {
    console.log('the engine is stopped...');
  }

  accelerate(): void {
    console.log('the engine is accelerating...');
  }
}

const car = new Car();
car.turnOn();
car.turnOff();
car.stop();
car.accelerate();
