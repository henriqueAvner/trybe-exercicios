const { myFizzBuzz } = require("./myFizzBuzz")

describe('Requisitos', () => {
    it('Se num for divisivel por 3 e 5, ele retorna fizzbuzz', () => {
        expect('fizzbuzz').toBe(myFizzBuzz(15))
    })
    it('Divisivel apenas por 3, retorna fizz', () => {
        expect('fizz').toBe(myFizzBuzz(9))
    })
    it('Divisivel apenas por 5, retorna buzz', () => {
        expect('buzz').toBe(myFizzBuzz(5))
    })
    it('Passando nenhum valor, retorna false', () => {
        expect(1).toBe(myFizzBuzz(1))
        expect(false).toBeFalsy();
    })
})