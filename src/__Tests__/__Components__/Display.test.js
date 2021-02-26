import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';
import '@testing-library/jest-dom';

test('is rendered without crashing', () => {
  const rootNode = document.createElement('div');
  ReactDOM.render(<Display />, rootNode);
});

test('doesnot change unexpectedly', () => {
  const displayComp = renderer.create(<Display />);
  let tree = displayComp.toJSON();
  expect(tree).toMatchSnapshot();
});
