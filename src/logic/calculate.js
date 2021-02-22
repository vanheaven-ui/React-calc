import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
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
        total = operate(total, 100, '÷');
        total.toString();
      } else if (next) {
        next = operate('0.01', next, 'x');
        next.toString();
      }
      break;
    default:
      break;
  }

  if (buttonName === '=') {
    total = operate(parseInt(total, 10), parseInt(next, 10), operation);
    if (typeof (total) === 'string') {
      total = null;
      const alert = document.createElement('div');
      alert.innerHTML = 'Cannot divide by 0!';
      alert.setAttribute('style', 'background-color: rgba(255, 68, 34, 0.3; max-width: 700px; margin: 0 auto;');
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
