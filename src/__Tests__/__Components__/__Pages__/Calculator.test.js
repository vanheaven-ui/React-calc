import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../../components/pages/Calculator';
import '@testing-library/jest-dom';

test('is rendered correctly', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, rootNode,
  );
});

test('doesnot change unexpectedly', () => {
  const appTree = renderer.create(
    <BrowserRouter><App /></BrowserRouter>,
  ).toJSON();
  expect(appTree).toMatchSnapshot();
});

test('renders App component', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});

test('Button click updates the display section', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByTestId('div')).toHaveTextContent('6');
});

test('"AC" Button click prints "0" on the display section', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('='));
  fireEvent.click(screen.getByText('AC'));
  expect(screen.getByTestId('div')).toHaveTextContent('0');
});
