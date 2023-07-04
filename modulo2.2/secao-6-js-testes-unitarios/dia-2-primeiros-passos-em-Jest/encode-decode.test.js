const { encode, decode } = require('./encode-decode')


describe('Requisito 1', () => {
    it('Teste se encode e decode são funções', () => {
        expect('function').toEqual(typeof enconde && typeof decode);
    })
})
describe('Requisito 2', () => {
    it('Na função encode, as vogais a,e,i,o,u são convertidas em 1,2,3,4,5 respectivamente', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
    })
})

describe('Requisito 3', () => {
    it('Na função decode, os números 1,2,3,4,5 são convertidos em a,e,i,o,u', () => {
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    })
})

describe('Requisito 4', () => {
    it('Teste se as demais letras e demais números não são convertidos para cada caso', () => {
        expect(encode('b,c,d,f,g')).not.toBe('6,7,8,9,10');
    })
})

describe('Requisito 5', () => {
    it('Teste se a string retornada tem o mesmo número de caracteres que a string como parâmetro', () => {
        expect(decode('jao').length).toBe(3);
    })
})
