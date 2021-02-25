import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPanel from '../../components/ButtonPanel';

const handleClick = () => '';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<ButtonPanel clickHandler={handleClick}/>, rootNode);
});
