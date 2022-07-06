const objetoA: {
  chaveA: string;
  readonly chaveB: string; // readonly -> torna o valor da chave inalterável
  chaveC?: string; // ? -> atributo opcional
  [key: string]: unknown; // index signature -> útil para criar um atributo com par chave/valor indefinido na criação do objeto literal
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'valor alterado';
objetoA.chaveC = 'Chave opcional';
objetoA.chaveD = 'chave dinâmica';
// objetoA.chaveX = 'sla' // Não é possível adicionar um novo atributo desse modo

export default true;
