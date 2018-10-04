const Calculator = artifacts.require("./Calculator.sol");

import { assert } from "chai";

contract("Calculator", () => {
  // Expected behaviour - result initialize to 10
  it("should initialize result to be 10", () => {
    let calculator: CalculatorInstance;
    return Calculator.deployed()
      .then(instance => {
        calculator = instance;
        return calculator.getResult.call();
      })
      .then(result => {
        assert.equal(result.valueOf(), 10);
      });
  });

  it("should add 10 to result", () => {
    let calculator: CalculatorInstance;
    let current: number;
    let numberToAdd = 10;
    return Calculator.deployed()
      .then(instance => {
        calculator = instance;
        return calculator.getResult.call();
      })
      .then(result => {
        current = result;
        return calculator.addToNumber(numberToAdd);
      })
      .then(_res => {
        return calculator.getResult.call();
      })
      .then(result => {
        assert.equal(
          result,
          parseInt(`${current}`) + parseInt(`${numberToAdd}`)
        );
      });
  });

  it("should minus 1 to result", () => {
    let calculator: CalculatorInstance;
    let current: number;
    let numberToMinus = 1;
    return Calculator.deployed()
      .then(instance => {
        calculator = instance;
        return calculator.getResult.call();
      })
      .then(result => {
        current = result;
        return calculator.minusToNumber(numberToMinus);
      })
      .then(_res => {
        return calculator.getResult.call();
      })
      .then(result => {
        assert.equal(
          result,
          parseInt(`${current}`) - parseInt(`${numberToMinus}`)
        );
      });
  });

  it("should multiply 2 to the result", () => {
    let calculator: CalculatorInstance;
    let current: number;
    let numberToMultiply = 2;
    return Calculator.deployed()
      .then(instance => {
        calculator = instance;
        return calculator.getResult.call();
      })
      .then(result => {
        current = result;
        return calculator.multiplyToNumber(numberToMultiply);
      })
      .then(_res => calculator.getResult.call())
      .then(result => {
        assert.equal(
          result,
          parseInt(`${current}`) * parseInt(`${numberToMultiply}`)
        );
      });
  });

  it("should divide 2 to the result", () => {
    let calculator: CalculatorInstance;
    let current: number;
    let numberToDivide = 2;
    return Calculator.deployed()
      .then(instance => {
        calculator = instance;
        return calculator.getResult.call();
      })
      .then(result => {
        current = result;
        return calculator.divideToNumber(numberToDivide);
      })
      .then(_res => calculator.getResult.call())
      .then(result => {
        assert.equal(
          result,
          parseInt(`${current}`) / parseInt(`${numberToDivide}`)
        );
      });
  });
});
