import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPanel from '../../components/ButtonPanel';
import '@testing-library/jest-dom';

const handleClick = () => '';

afterEach(cleanup);

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<ButtonPanel clickHandler={handleClick} />, rootNode);
});

test('doesnot change unexpectedly', () => {
  const buttonPanel = renderer.create(
    <ButtonPanel clickHandler={handleClick} />,
  );
  const tree = buttonPanel.toJSON();
  expect(tree).toMatchSnapshot();
});

test('is in the document', () => {
  render(<ButtonPanel clickHandler={handleClick} />);
  expect(screen.getByText('AC')).toBeInTheDocument();
  expect(screen.getByText('=')).toBeInTheDocument();
  expect(screen.getByText('+/-')).toBeInTheDocument();
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('%')).toBeInTheDocument();
  expect(screen.getByText('x')).toBeInTheDocument();
  expect(screen.getByText('.')).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
  expect(screen.getByText('6')).toBeInTheDocument();
  expect(screen.getByText('7')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('9')).toBeInTheDocument();
  expect(screen.queryByText('()')).toBeNull();
  expect(screen.queryByText('10')).toBeNull();
});
