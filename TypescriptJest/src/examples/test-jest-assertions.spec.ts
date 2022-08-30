/**
 * Assertions ~> expect().to...()
 *
 * Apesar do código englobar muitas responsabilidades,
 * "A ideia é que a gente crie uma asserção para cada teste"
 */

// geralmente, um expect() por teste
describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    // testando valores aproximados
    expect(number).toBeCloseTo(10.001); // (<numero>, <casas decimais próximas>)
    expect(number).toBeCloseTo(9.996);

    // checa se valor não é nulo
    expect(number).not.toBeNull();

    // checa se propriedade existe
    expect(number).toHaveProperty('toString');
  });

  it('should split tests', () => {
    const number = 10;

    // recomendado: para valores primitivos
    expect(number).toBe(10); // checa a igualdade com Object.is() (não funiona bem com objetos)
    // recomendado para objetos
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });
});

// diferença do toBe() para toEqual()

describe('Objects', () => {
  it('should test jest assertions with objetcs', () => {
    const person = { firstName: 'Carlos', age: 17 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson); // fail
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 17);

    expect(person.firstName).toBe('Carlos');
  });
});
