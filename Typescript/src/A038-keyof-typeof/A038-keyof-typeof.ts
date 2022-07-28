type ColorsObj = typeof colorsObj; // typeof <idVariavel> ~> Retorna o tipo da variável
type ColorsKey = keyof ColorsObj; // keyof <idObjeto> ~> Retorna as chaves do objeto

/**
 * método de realizar o type "incorreto" sem typeof
 * type ColorsObj = {
 * vermelho: string;
 * verde: string;
 * azul: string;
 * }
 */

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColor(color: ColorsKey, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
console.log(translateColor('roxo', colorsObj));
