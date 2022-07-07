// TIPO TUPLE

// "É um tipo de array com tipos específicos e tamanho fixo"

// no indice 0, um número e no indice 1, uma string

const dadosCliente1: [number, string] = [1, 'Luiz'];

// ultimo parâmetro opcional
const dadosClientes2: [number, string, string?] = [1, 'Luiz', 'Miranda'];

// parâmetro de tupla com rest operator
const dadosClientes3: [number, string, ...string[]] = [1, 'Luiz', 'Seila'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
console.log(dadosCliente1);

// É possível alterar a tupla com push ou pop, causando possíveis comportamentos indesejados na estrutura de dados
// solução para tal ~> readonly
// torna a tupla imutável
const dadosCliente4: readonly [number, string] = [30, 'Coldzera'];

// readonly com array
const conjunto1: readonly string[] = ['UE', 'PA'];
const conjunto2: ReadonlyArray<string> = ['CA', 'VA', 'LO'];

console.log(conjunto1, conjunto2);

export default true;
