import { Messaging } from './messaging';

/* Design pattern factory
 *   auxilia na manutenção
 *   reduz repetição de código (d.r.y. )
 */
const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should call console.log with "Your sent message: ${msg}"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const msg = 'b';
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith(`Your sent message: ${msg}`);
  });
});
