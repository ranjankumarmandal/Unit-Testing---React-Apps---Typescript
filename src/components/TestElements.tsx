import React, { useState } from 'react';

const TestElements = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default TestElements;
