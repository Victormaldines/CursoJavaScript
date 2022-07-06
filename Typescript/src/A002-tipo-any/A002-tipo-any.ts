// TIPO ANY (evitar)
// Any -> Qualquer tipo, geralmente ocorre quando o TypeScript não consegue aplicar a inferência de tipo

// any explícito
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('aaa'));

// any implícito
// no tsconfig.json, o strict: true bloqueia o any implícito

function showMessage2(msg) {
  return msg;
}

console.log(showMessage2([1, 2, 3]));
console.log(showMessage2('aaa'));

// Corrigindo -> Explicitar o tipo
function showMessage3(msg: string) {
  return msg;
}

console.log(showMessage3('Orba'));

export default true;
