import React, { useState } from 'react';

const TestEvent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid='counter'>Counter</h1>
      <button data-testid='button-up' onClick={() => setCounter(counter + 1)}>
        Up
      </button>
      <button data-testid='button-down' onClick={() => setCounter(counter - 1)}>
        Down
      </button>
    </>
  );
};

export default TestEvent;
