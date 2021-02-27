import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Routes from '../../components/Routes';
import '@testing-library/jest-dom';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Routes />, rootNode);
});

test('is in the document', () => {
  render(<Routes />);
  expect(screen.getByText('Welcome to Math Magicians World!')).toBeInTheDocument();
});

test('does not change unexpectedly', () => {
  const tree = renderer.create(
    <Routes />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
