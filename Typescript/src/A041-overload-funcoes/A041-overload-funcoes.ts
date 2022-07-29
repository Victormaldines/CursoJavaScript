// OVERLOAD DE FUNÇÕES
// "Baseado na assinatura ('parâmetros') da função, a função sem comportará de diferentes modos"
// Typescript (2020) somente suporta overload nos tipos

// Overload de tipos
// Recebendo apenas um parâmetro
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((sum, val) => (sum += val), 0) + x + (y || 0);

  return x + (y || 0); // atribuição por curto-circuito (OR)
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 4, 5));
