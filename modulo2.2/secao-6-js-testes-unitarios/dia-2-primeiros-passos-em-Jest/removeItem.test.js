const { removeItem } = require('./removeItem');

describe('Requisito1', () => {
    it('A chamada removeItem ([1,2,3,4], 3) retorna o array esperado', () => {
        expect([1,2,4]).toEqual(removeItem([1, 2, 3, 4], 3))
    })
    it('A chamada removeItem ([1,2,3,4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect([1, 2, 3, 4]).not.toEqual(removeItem([1, 2, 3, 4], 3))
    })
    it('A chamada removeItem ([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5))
    })
})
