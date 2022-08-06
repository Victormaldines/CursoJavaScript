/**
 * DEFAULT GENERIC TYPE (alguns deles - resto na documentação amigo)
 *
 */

/* Record
 * ~> representa um objeto onde se informa o tipo da chave e o tipo dos valores
 */
//          Record<<tipoChave>, <tipoValor>>
const obj1: Record<string, string | number> = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};

/** Required
 * ~> converte os atributos/métodos de um type para Required (requeridos/obrigatórios)
 */

type PersonProtocol = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

type PersonRequired = Required<PersonProtocol>;

const obj2: PersonRequired = {
  firstName: 'sapo',
  lastName: 'PAYSANDU',
  age: 2,
};

/** Partial
 * ~> Converte os atributos/métodos de um type para Partial (opcional)
 */

type PersonPartial = Partial<PersonProtocol>;
const obj3: PersonPartial = {
  firstName: 'Ronaldinho',
};

/** Readonly
 * ~> Converte os atributos/métodos de um type para readonly (não alteráveis pós declaração/tipos literais)
 */

type PersonReadonly = Readonly<PersonProtocol>;
const obj4: PersonReadonly = {
  firstName: 'Nobru',
  lastName: 'Apelão',
  age: 2,
};

// obj4.firstName = 'Coringa'; <~ lança um erro

/** Pick
 * ~>
 */

type PersonPick = Pick<PersonRequired, 'firstName' | 'age'>;
const obj5: PersonPick = {
  firstName: 'Nemo',
  age: 5,
};

/** Exclude & Exctract
 *
 * EXCLUDE
 * ~> Computa todos os tipos que estão em ABC que não estão em CDE (ABC & ~CDE) / ({ A, B, C } - { C, D, E }) = DIFERENÇA
 *
 * EXTRACT
 * ~> Computa todos os tipos que estão em ABC que podem ser atribuidos aos tipos de CDE (ABC & CDE) / ({ A, B, C} & { C, D, E }) = INTERSEÇÃO
 */

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

// Exemplo de aplicação

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  email: string;
};

// AccountApi terá todas as chaves de AccountMongo EXCETO a chave <_id>, logo depois, com INTERSECT (&), atribui a chave <id> à AccountApi
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'a9w8d09wad8awq',
  name: 'opa',
  age: 30,
  email: 'hmHm@gmail.com',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;

  return {
    id: _id,
    ...accountData,
  };
}

const accountApi = mapAccount(accountMongo);
console.log('MONGO:');
console.log(accountMongo);
console.log('API:');
console.log(accountApi);

// module mode
export default 1;
