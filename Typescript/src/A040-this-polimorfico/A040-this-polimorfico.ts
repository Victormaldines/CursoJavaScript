export class Calculator {
  constructor(public number: number) {}

  add(number: number): this {
    this.number += number;
    return this;
  }

  sub(number: number): this {
    this.number -= number;
    return this;
  }

  div(number: number): this {
    this.number /= number;
    return this;
  }

  mult(number: number): this {
    this.number *= number;
    return this;
  }
}

export class GoldenCalculator extends Calculator {
  pow(number: number): this {
    this.number **= number;
    return this;
  }

  glow(): void {
    console.log('OMG WOOOW! The golden calculator is glowing!');
  }
}

const calc = new Calculator(3);
calc.add(5).mult(2).div(4).sub(2);
const gCalc = new GoldenCalculator(5);
gCalc.add(5).sub(7).mult(3).pow(2);

// Builder - GoF Design Pattern
/**
 * Não 'construir' o objeto inteiro ao intanciá-lo,
 * mas, construí-lo pós instanciação (por métodos setters, por exemplo)
 * retornando o <this>, possibilitando o building em cadeia (ex.: obj.setA(x).setB(y).submit())
 */

// simulando uma requisição para um servidor na web

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    // checar com typeguard
    if (this.method && this.url)
      console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('https://www.sla.com').send();
