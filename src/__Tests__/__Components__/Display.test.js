import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Display from '../../components/Display';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Display />, rootNode);
});