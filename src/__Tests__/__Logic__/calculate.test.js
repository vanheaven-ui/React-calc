import Big from 'big.js';
import calculate from '../../logic/calculate';

const dataObj = {
  total: null,
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

test('appends \'.\' to 0 with initial state and "." operation', () => {
  expectedObj.total = '0.';
  expect(calculate(dataObj, '.')).toStrictEqual(expectedObj);
});

/* eslint-disable */

test('mutates state total with +/-', () => {
  dataObj.total = 1;
  expectedObj.total = Big('-1'),
  expect(calculate(dataObj, '+/-')).toStrictEqual(expectedObj);
});

/* eslint-enable */

test('appends \'.\' to total with "." operation', () => {
  expectedObj.total = '1.';
  expect(calculate(dataObj, '.')).toStrictEqual(expectedObj);
});

test('mutates state next with +/-', () => {
  dataObj.next = '2';
  expectedObj.total = 1;
  expectedObj.next = Big('-2');
  expect(calculate(dataObj, '+/-')).toStrictEqual(expectedObj);
});

test('appends \'.\' to next with "." operation', () => {
  expectedObj.next = '2.';
  expect(calculate(dataObj, '.')).toStrictEqual(expectedObj);
});

test('mutates state next with %', () => {
  expectedObj.next = 0.02;
  expect(calculate(dataObj, '%')).toStrictEqual(expectedObj);
});

test('mutates total with "=" buttonName argument', () => {
  dataObj.operation = '+';
  expectedObj.total = '3';
  expectedObj.next = null;
  expect(calculate(dataObj, '=')).toStrictEqual(expectedObj);
});

test('mutates state next with %', () => {
  dataObj.operation = null;
  expectedObj.next = 0.02;
  expectedObj.total = 1;
  expect(calculate(dataObj, '%')).toStrictEqual(expectedObj);
});

test('mutates state total with %', () => {
  dataObj.next = null;
  expectedObj.next = null;
  expectedObj.total = 0.01;
  expect(calculate(dataObj, '%')).toStrictEqual(expectedObj);
});

test('mutates dataObj with AC', () => {
  dataObj.operation = 'AC';
  expectedObj.next = null;
  expectedObj.total = null;
  expect(calculate(dataObj, 'AC')).toStrictEqual(expectedObj);
});
