// UNKNOWN
// "Um ANY mais seguro"

/* NÃO É EMITIDO UM ERRO NO JAVASCRIPT
let x: any;
x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

console.log(x + y);
*/

let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

// Unknown é bloqueado até serem realizadas as devidas filtragens de tipo
if (typeof x === 'number') {
  console.log(x + y);
}

export default true;
