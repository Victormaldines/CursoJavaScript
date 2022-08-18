/**
 * Tudo criado aqui, precisa ser criado no escopo global
 * para que o typescript tenha acesso a esses dados no sistema inteiro
 *
 * CADA BIBLIOTECA VAI TER UMA DECLARAÇÃO DE TIPOS ESPECÍFICA
 * Ou seja, a implementação do declaration-files vai se alterar de lib para lib
 */

// declaration merge com namespace do Lodash
declare namespace _ {
  // declaration merge com a interface LoDashStatic
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}
