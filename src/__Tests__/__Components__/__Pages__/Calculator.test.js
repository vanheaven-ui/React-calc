import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../components/pages/Calculator';

test('is rendered correctly', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<App />, rootNode);
});
