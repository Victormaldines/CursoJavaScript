import { Persistency } from './persistency';

describe('Persistency', () => {
  /**
   * os mocks (sut, consoleSpy) armazenam as informações de toHaveBeenCalledTimes() para os outros testes
   * geralmente, gerando erros.
   *
   * afterEach() ~> Executa a função para cada vez que um teste (it(), test()) for chamado
   *
   * () => jest.clearAllMocks() ~> função anônima que chama jest.clearAllMocks()
   *  jest.clearAllMocks() ~> "reseta" as infomações dos mocks para poder reinstanciá-las em testes subsequentes
   *  reseta, por exemplo, a toHaveBeenCalledTimes()
   */
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // test pattern:
    // class que está sendo testada as 'sut' (System Under Test)
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined;
  });

  // teste de comportamento (spyOn)
  it('should call console.log once', () => {
    const sut = new Persistency();
    /**
     * Jest vai observar o objeto com o método segundo do parâmetro
     *  possível ver quantas vezes o método foi chamado (toHaveBeenCalledTimes(<qtdChamadas>: number))
     * nomeVariavel = jest.spyOn(<objeto>: objetct, <metodo>: string): SpyInstance
     */
    // consoleSpy armazena o comportamento do método
    const consoleSpy = jest.spyOn(console, 'log');

    // chamando console.log() dentro do objeto sut
    sut.saveOrder();

    // console.log() precisa ser chamado 1 vez
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  // testando comportamento com valor de chamada no parâmetro
  it('should call console.log with "Order saved successfully"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    /**
     * toHaveBeenCalledWith(<parametro>: any)
     * o teste passa caso a função testada for chamada com o valor passado no parâmetro
     * ex: console.log('sla');
     * expect(consoleSpy).toHaveBeenCalledWith('sla');
     */
    expect(consoleSpy).toHaveBeenCalledWith('Order saved successfully');
  });
});
