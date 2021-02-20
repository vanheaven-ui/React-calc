import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
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
      if (numberTwo !== 0) {
        output = operand1.div(operand2);
      }
      output = 'Cannot calculate!';
      break;
    case '%':
      output = numberTwo ? operand2.div(100).toPrecision(10) : operand1.div(100).toPrecision(10);
      break;
    default:
      break;
  }
  if (operation === '%') {
    return output;
  } if (operation === '÷') {
    if (numberTwo !== 0) {
      return output.toPrecision(4);
    }
    return output;
  }
  return output.toPrecision(1);
};

export default operate;
