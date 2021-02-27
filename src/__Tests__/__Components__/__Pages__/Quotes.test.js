import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quotes from '../../../components/pages/Quote';
import '@testing-library/jest-dom';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><Quotes /></BrowserRouter>, rootNode,
  );
});

test('doesnot change unexpectedly', () => {
  const quotesTree = renderer.create(
    <BrowserRouter><Quotes /></BrowserRouter>,
  ).toJSON();
  expect(quotesTree).toMatchSnapshot();
});

test('is in the document', () => {
  render(<BrowserRouter><Quotes /></BrowserRouter>);
  expect(screen.getByText('Enjoy this famous quote!')).toBeInTheDocument();
});
