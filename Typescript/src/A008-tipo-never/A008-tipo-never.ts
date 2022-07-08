// TIPO NEVER
// Representa um não-valor
// Never quer dizer que aquela função/método NUNCA irá retornar valor algum

// geralmente indica que irá lançar um erro na aplicação, ou simplesmente travá-la (ex. loop infinito)
export function criaErro(): never {
  throw new Error('qualquer erro');
}

criaErro();

export default true;
