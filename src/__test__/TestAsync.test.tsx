import React from 'react';
import { cleanup, render, fireEvent, wait } from '@testing-library/react';
import TestAsync from '../components/TestAsync';

afterEach(cleanup);

it('increment counter should be after 5 second for button-up', async () => {
  const { getByTestId, getByText, findByTestId } = render(<TestAsync />);
  fireEvent.click(getByTestId('button-up'));

  const counter = await wait(() => getByText('1'));

  expect(counter).toHaveTextContent('1');
});
