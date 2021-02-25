import Big from 'big.js';
import operate from '../../logic/operate';

const operand1 = '1';
let operand2 = '2';

test('operate returns sum', () => {
  expect(operate(operand1, operand2, '+')).toEqual(Big(3));
  expect(operate('0.1', '0.2', '+')).toEqual(Big(0.3));
});

test('operate returns division outcome', () => {
  expect(operate(operand1, operand2, '÷')).toEqual(Big(0.5));
  expect(operate('0.1', '0.2', '÷')).toEqual(Big(0.5));
});

test('operate returns product', () => {
  expect(operate(operand1, operand2, 'x')).toEqual(Big(2));
  expect(operate('0.1', '0.2', 'x')).toEqual(Big(0.02));
});

test('operate returns difference', () => {
  expect(operate(operand1, operand2, '-')).toEqual(Big(-1));
  expect(operate('0.1', '0.2', '-')).toEqual(Big(-0.1));
});

test('operate doesnt permit divide by 0', () => {
  operand2 = '0';
  expect(operate(operand1, operand2, '÷')).toBe('Cannot divide by 0!');
});
