import React, { useState } from 'react';

const TestAsync = () => {
  const [counter, setCounter] = useState(0);

  const handleAsyncClick = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 5000);
  };

  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <button data-testid='button-up' onClick={handleAsyncClick}>
        Up
      </button>
      <button data-testid='button-down' onClick={() => setCounter(counter - 1)}>
        Down
      </button>
    </>
  );
};

export default TestAsync;
