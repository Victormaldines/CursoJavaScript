// Encadeamento opcional e Operator de coalescência nula

type LegalDocument = {
  title: string;
  text: string;
  date?: Date;
};

const legalDocument: LegalDocument = {
  title: 'the title',
  text: 'the text',
  //date: new Date(),
};

// ENCADEAMENTO OPCIONAL (?) '.<attr/method>?'
console.log(legalDocument.date?.toDateString());

// COALESCÊNCIA NULA (??)
// "Checar se o valor que está sendo recebido do lado esquerdo é um não-valor (null | undefined)"
// "Se o valor da esquerda for null | undefined, retorna o código à direita"
console.log(
  legalDocument.date?.toDateString() ?? "Oh, no... the date doesn't exist",
);
console.log(undefined ?? 'undefined value test');
console.log(null ?? 'null value test');
console.log(false ?? "false value test (doesn't work)");
console.log(0 ?? "0 value test (doesn't work)");
