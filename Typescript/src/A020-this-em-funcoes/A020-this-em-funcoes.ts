//import './form-control';

// Tipando o This
/*
Passamos como se fosse um argumento para a função, tipando-o
Só podemos chamar uma função com o this tipado por <idFuncao>.call(<this>, ...args) || <idFuncao>.apply(<this>, [...args])
*/
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}
funcao.call(new Date(), 'Patati', 12);
funcao.apply(new Date(), ['Patati', 30]);
/** */
