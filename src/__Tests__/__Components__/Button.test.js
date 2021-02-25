import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/Button';

const handleClick = () => '';

test('renders without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Button clickHandler={handleClick} />, rootNode);
});
