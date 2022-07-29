type Vehicle = {
  brand: string;
  year: number;
};

type Carro = {
  marca: Vehicle['brand']; // retorna o tipo da respectiva chave em Vehicle (chaves-em-tipos)
  ano: Vehicle['year'];
  nome: string;
};

const car: Carro = {
  marca: 'ford',
  ano: 2022,
  nome: 'Batmóvel',
};

console.log(car);
