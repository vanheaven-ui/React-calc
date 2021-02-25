import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Button from '../../components/Button';
import '@testing-library/jest-dom/extend-expect';

const handleClick = () => '';

test('renders without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Button clickHandler={handleClick}/>, rootNode);
});
