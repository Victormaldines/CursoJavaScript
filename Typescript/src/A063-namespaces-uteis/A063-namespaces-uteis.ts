/**
 * Namespaces uteis
 *
 * Apesar de não serem muito úteis:
 * Os namespaces, no campo dos tipos, são bastante utilizados
 */

import _ from './module';

const array = [100, 200, 300, 400];

console.log(_.sum(array)); // Lodash: soma dos elementos do array
console.log(_.min(array)); // Lodash: menor valor dentre os elementos do array
console.log(_.max(array)); // Lodash: maior valor dentro os elementos do array
console.log(_.mean(array)); // Lodash: Média dos elementos do array

/**
 * Estendendo tipos de bibliotecas de terceiros
 *
 * é possível criar funções e atribuí-las aos objetos intanciados de classes importadas de bibliotecas
 * porém, o typescript reconhece que o tipo daquela função/atributo específico não está contido no @types (declaration files) da biblioteca,
 * lançando um erro ao executar o código
 *
 * Para isso, precisamos configurar o declaration files, criando um arquivo <declarationName>.d.ts
 */
console.log(_.mul(array));

console.log(global.SLAGLOBAL);
