import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Navbar /></BrowserRouter>, rootNode);
});

test('does not change unexpectedly', () => {
  const tree = renderer.create(
    <BrowserRouter><Navbar /></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('is in the document', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Calculator')).toBeInTheDocument();
});

test('correct attributes', () => {
  render(<BrowserRouter><Navbar /></BrowserRouter>);
  expect(screen.getByText('Quotes')).toHaveAttribute('href', '/quotes');
  expect(screen.getByText('Home')).toHaveAttribute('href', '/');
  expect(screen.getByText('Calculator')).toHaveAttribute('href', '/calc');
});
