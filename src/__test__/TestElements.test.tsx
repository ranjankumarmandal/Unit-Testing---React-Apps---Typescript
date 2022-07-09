// Unit Testing DOM elements

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from '../components/TestElements';

afterEach(cleanup);

// testt 1 : Test if the counter is equal to 0

it('counter should equal to 0', () => {
  // write your tests here
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('counter')).toHaveTextContent('0');
});

// test 2 : Test if one button button-up is enabled
it('button-up should be enabled', () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

// test 3 : Test if one button button-down is disabled
