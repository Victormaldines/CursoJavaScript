// TIPO VOID
// Uma função, por exemplo, não retorna NADA

// Dica do Luiz: Sempre explicitar o retorno das funções

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lincon',
  sobrenome: 'Lau',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('esquece', 'explodido', 'estourado', 'forget', '*assobio*');
pessoa.exibirNome();

export default { pessoa };
