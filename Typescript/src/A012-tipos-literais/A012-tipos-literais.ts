// TIPOS LITERAIS (literal types)

// paralelo: const em JavaScript -> o valor da variável como um tipo

let x = 10;// eslint-disable-line
// x -> tipo == number
x = 0b1010; // permite
// x = 'Luiz'; // não permite

// y -> tipo == 10
const y = 10; // y é um subtipo de number (10)

// a só pode ser do tipo 100
// não recomendado
let a: 100 = 100; // eslint-disable-line
// a = 120; // não permite

// "recomendado" SE NECESSÁRIO
let b = 100 as const; // eslint-disable-line

const person = {
  firstName: 'Luiz' as const,
  lastName: 'Miranda',
};
// person.firstName = 'Luiz1'; // Não permite a troca de um atributo com tipo literal

// JUNÇÃO DE UNION TYPES COM LITERAL TYPES > ENUM (geralmente)

// Função chooseAColor irá receber um parâmetro "string" entre os subtipos "vermelho", "verder" e "azul"
function chooseAColor(cor: 'Vermelho' | 'Verde' | 'Azul'): string {
  return cor;
}

console.log(chooseAColor('Verde'));

export default true;
