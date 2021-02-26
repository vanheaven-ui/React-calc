import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../components/pages/Calculator';

test('is rendered correctly', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, rootNode);
});

test('doesnot change unexpectedly', () => {
  const appTree = renderer.create(
    <BrowserRouter><App /></BrowserRouter>
  ).toJSON();
  expect(appTree).toMatchSnapshot();
});
