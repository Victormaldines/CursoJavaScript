/* eslint-disable @typescript-eslint/triple-slash-reference */
/**
 * NAMESPACES
 * Importando namespaces
 */
/// <reference path="modules/module.ts" />

console.log(MyNamespace.name);
console.log(namespaceConst); // também importa os dados fora da namespace (o arquivo inteiro)

// npx tsc <path>.index.ts --outFile <path>.index.js
