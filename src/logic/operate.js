import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  Big.DP = 10;
  const operand1 = new Big(numberOne);
  const operand2 = new Big(numberTwo);
  let output;
  switch (operation) {
    case '+':
      output = operand1.plus(operand2);
      break;
    case '-':
      output = operand1.minus(operand2);
      break;
    case 'x':
      output = operand1.times(operand2);
      break;
    case '÷':
      if (numberTwo !== '0') {
        output = operand1.div(operand2);
      } else {
        output = 'Cannot divide by 0!';
      }
      break;
    default:
      break;
  }
  return output;
};

export default operate;
