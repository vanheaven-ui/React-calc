import Big from 'big.js';
import calculate from '../../logic/calculate';

const dataObj = {
  total: 1,
  next: null,
  operation: null,
};

const expectedObj = {
  total: null,
  next: null,
  operation: null,
};

test('calculate is defined', () => {
  expect(calculate(dataObj, '')).toBeDefined();
});

/* eslint-disable */

test('calculate mutates dataObj with +/-', () => {
  expectedObj.total = Big('-1'),
  expect(calculate(dataObj, '+/-')).toStrictEqual(expectedObj);
  dataObj.next = 2;
  expectedObj.total = 1;
  expectedObj.next = Big('-2');
  expect(calculate(dataObj, '+/-')).toStrictEqual(expectedObj);
});

/* eslint-enable */

test('Calculate mutates dataObj with %', () => {
  expectedObj.next = 0.02;
  expect(calculate(dataObj, '%')).toStrictEqual(expectedObj);
  dataObj.next = null;
  expectedObj.next = null;
  expectedObj.total = 0.01;

  expect(calculate(dataObj, '%')).toStrictEqual(expectedObj);
});

test('Calculate mutates dataObj with AC', () => {
  dataObj.operation = 'AC';
  expectedObj.next = null;
  expectedObj.total = null;
  expect(calculate(dataObj, 'AC')).toStrictEqual(expectedObj);
});