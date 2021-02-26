import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';
import { render, screen } from '@testing-library/react/';
import '@testing-library/jest-dom';

const handleClick = () => '';

test('renders without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Button clickHandler={handleClick} />, rootNode);
});

test('component doesn\'t change unexpectedly', () => {
  const btn = renderer.create(
    <Button clickHandler={handleClick}>{'='}</Button>
  );
  let tree = btn.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component renders the correct text', () => {
  const { getByRole } = render(
    <Button clickHandler={handleClick}></Button>
  );
  expect(getByRole('button')).toBeInTheDocument();
});
