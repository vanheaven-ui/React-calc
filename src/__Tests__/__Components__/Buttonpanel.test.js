import { render, cleanup } from '@testing-library/react';
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
    <ButtonPanel clickHandler={handleClick}></ButtonPanel>
  );
  let tree = buttonPanel.toJSON();
  expect(tree).toMatchSnapshot();
});
