import React, { useState } from 'react';

const TestElements = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid='counter'>{counter}</h1>
      <button>Up</button>
    </>
  );
};

export default TestElements;
