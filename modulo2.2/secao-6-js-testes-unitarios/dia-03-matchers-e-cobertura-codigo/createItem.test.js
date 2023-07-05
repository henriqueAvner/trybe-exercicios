const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const objectItem = createItem('banana','kg', 1.99, 20);
    const expectObject = {name: 'banana', unit: 'kg', price: 1.99, quantity: 20}
  expect(objectItem).toEqual(expectObject)
  });
  it('utiliza zero como quantidade padrão', () => {
    const itensObject = createItem('banana', 'kg', 1.99);
    expect(itensObject).toHaveProperty('quantity', 0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow()
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow();
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01)).toThrow()
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0.00)).toThrow()
  });
});