import React, { useState } from 'react';

const TestEvent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 data-testid='counter'>Counter</h1>
    </>
  );
};

export default TestEvent;
