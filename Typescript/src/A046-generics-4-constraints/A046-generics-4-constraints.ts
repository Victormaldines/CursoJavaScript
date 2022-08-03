/**
 * GENERIC TYPE COM CONSTRAINTS
 *
 * ex.: Função que obtém uma chave de objeto e retorna o valor dessa chave
 */

// Retorno => Chave <K> do objeto <O>
/* O typescript não aceita o K ser uma chave de O de começo,
porque K é muito abrangente, necessitando de uma constraint:
  K extends keyof O
lê-se: <K> é, no máximo, chave de <O>
*/

type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];
const a = { a: 3, b: 2 };

const getKey: GetKeyFn = (obj, key) => obj[key];
console.log(getKey(a, 'b'));

const animal = {
  color: 'Pink',
  vaccines: ['vaccine1', 'vaccine2'],
};

const vaccines = getKey(animal, 'color');
console.log(vaccines);

export default true;
