const UI = require('../UI')

describe('UI', () => {
    let print 

    beforeEach(() => {
        print = new UI()
    })

    it('prints the sum', () => {
        const expected = `The answer is: 25`
        const result = print.printSum(10, 15)
        expect(result).toEqual(expected)
    })

    it('prints the difference', () => {
        const expected = `The answer is: 5`
        const result = print.printDifference(15, 10)
        expect(result).toEqual(expected)
    })

    it('throws an error if numbers are not defined', () => {
        expect(() => print.printSum()).toThrow(new Error('I need two number to function'))
        expect(() => print.printDifference()).toThrow(new Error('I need two number to function'))
    })
})