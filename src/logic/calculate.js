import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
  switch (buttonName) {
    case '+/-':
      if (total || next) {
        total *= -1;
        next *= -1;
      }
      break;
    case 'AC':
      total = '0';
      next = '';
      operation = null;
      break;
    case '.':
      if (total && !next) {
        total.concat('.');
      } else if (next) {
        next.toString().concat('.');
      }
      break;
    default:
      break;
  }

  if (['+', '-', 'x', '÷', '%', '='].includes(buttonName)) {
    total = operate(total, next, operation);
    return total;
  }

  return { total, next, operation };
};

export default calculate;
