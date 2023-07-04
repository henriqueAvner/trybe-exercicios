const { myFizzBuzz } = require("./myFizzBuzz")

describe('Requisitos', () => {
    it('De acordo com o parâmetro, retorna o valor:', () => {
        expect('fizzbuzz').toBe(myFizzBuzz(15))
        expect('fizz').toBe(myFizzBuzz(9))
        expect('buzz').toBe(myFizzBuzz(5))
        expect(1).toBe(myFizzBuzz(1))
        expect(false).toBeFalsy();
    })
})