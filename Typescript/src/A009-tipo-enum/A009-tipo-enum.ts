// Tipo ENUM
// Estrutura de dados não-ordenada que utilizamos quando tem-se mais de uma opção para algo (finito)

/*    ____________
     /           v
    Chave     Valor
     ^           /
     -----------
 */

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores2 {
  // indice 0 == undefined
  VERMELHO = 1, // 1
  AZUL, // 2
  AMARELO, // 3
}

enum Cores3 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
  ROXO = 'ROXO',
}

enum Cores4 { // Merge de enum's ocorrem quando possuem o mesmo nome
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores4 { // Merge de enum's ocorrem quando possuem o mesmo nome
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

enum Cores5 {
  VERMELHO,
  AZUL,
  AMARELO,
}

function escolhaACor(cor: Cores5): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores5.AMARELO);
escolhaACor(23123); // NÃO RETORNA ERRO

export default true;
