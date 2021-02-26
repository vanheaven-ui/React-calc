import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../components/pages/Home';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, rootNode);
});

test('doesnot change unexpectedly', () => {
  const homeTree = renderer.create(
    <BrowserRouter><Home /></BrowserRouter>
  ).toJSON();
  expect(homeTree).toMatchSnapshot();
});
