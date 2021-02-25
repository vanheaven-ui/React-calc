import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Navbar />, rootNode);
});
