import React, { useState } from 'react';

const TestElements = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <button data-testid='button-up' onClick={() => setCounter(counter + 1)}>
        Up
      </button>
    </>
  );
};

export default TestElements;
