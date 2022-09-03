import { Product } from './product';

type CreateSut = (name: string, price: number) => Product;

const createSut: CreateSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should call product', () => {
    const sut = createSut('shirt', 49.9);

    expect(sut).toHaveProperty('name', 'shirt'); // checa se há a propriedade name com o valor 'shirt' no objeto sut
    expect(sut).toHaveProperty('price'); // checa se há a propriedade price no objeto sut
    expect(sut.price).toBeCloseTo(49.9); // checa se o valor recebido é aproximado ao valor esperado
  });
});
