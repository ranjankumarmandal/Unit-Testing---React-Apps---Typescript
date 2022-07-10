// Unit Testing for Events

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TestEvent from '../components/TestEvent';

afterEach(cleanup);

// Test 1 : Test if increament counter event is working good
it('increament counter event should work', () => {
  // write tests here
  const { getByTestId } = render(<TestEvent />);
  fireEvent.click(getByTestId('button-up')); // click event in unit testing with react-testing-library with jest

  expect(getByTestId('counter')).toHaveTextContent('1');
});

// Test 2 : Test if decrement counter event is working good
it('decreament counter event should work', () => {
  // write tests here
  const { getByTestId } = render(<TestEvent />);
  fireEvent.click(getByTestId('button-down'));

  expect(getByTestId('counter')).toHaveTextContent('-1');
});
