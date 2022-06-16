const Calculator = require('./calculator')

class UI {
    
    printSum(num1, num2) {
      if(num1 === undefined || num2 === undefined) throw new Error('I need two number to function')
      const calculator = new Calculator()
      const ans = calculator.add(num1, num2)
      return `The answer is: ${ans}`
    }

    printDifference(num1, num2) {
      if(num1 === undefined || num2 === undefined) throw new Error('I need two number to function')
      const calculator = new Calculator()
      const ans = calculator.subtract(num1, num2)
      return `The answer is: ${ans}`
    }
  }

  module.exports = UI