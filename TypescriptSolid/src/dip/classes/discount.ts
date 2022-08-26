/**
 * Liskov Substitution Principle pede para que se tenha coerência
 * quando utilizar uma relção de 'é um' <extends>.
 *
 * Ex.: "Em todo o lugar em que eu for usar Discount, o comportamento
 * esperado dos subtipos de Discount deve ser o mesmo de Discount"
 */

// Base class
export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1;
}

export class NoDiscount extends Discount {
  /*
   * Alterar o comportamento da classe (ou método da classe) quebra o Liskov Substitution Principle (Lsp)
   * Já que a classe NoDiscout deixar de ser 'Um tipo de' Discount
   * Apesar de o programa continuar funcionando sem lançar erros.
   */
  // calculate(price: number): number {
  //   return price;
  // }
}
