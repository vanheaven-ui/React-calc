import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let {
    total, next, operation,
  } = dataObj;

  switch (buttonName) {
    case '+/-':
      if (total && !next) {
        total = operate(total, -1, 'x');
      } else if (next) {
        next = operate(-1, next, 'x');
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      if (total && !next) {
        total /= 100;
      } else if (next) {
        next /= 100;
      }
      break;
    case '.':
      if (!total) {
        total = '0.';
      } else if (total && !total.toString().includes('.') && !next && !operation) {
        total += '.';
      }
      if (!next && total && operation) {
        next = '0.';
      } else if (next && !next.includes('.')) {
        next += '.';
      }
      break;
    default:
      break;
  }

  if (buttonName === '=' && total && next) {
    total = operate(total, next, operation);
    if (total === 'Cannot divide by 0!') {
      total = null;
      const alert = document.createElement('div');
      alert.innerHTML = 'Cannot divide by 0!';
      alert.classList.add('alert');
      document.body.insertAdjacentElement('afterBegin', alert);
      setTimeout(() => {
        document.querySelector('div.alert').remove();
      }, 2000);
    }
    next = null;
    operation = null;
  }
  return { total, next, operation };
};

export default calculate;
