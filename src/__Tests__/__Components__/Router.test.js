import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../../components/Routes';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Routes />, rootNode);
});