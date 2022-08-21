import React, { useState } from "react";

const CounterButton = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>You have clicked the button {counter} times.</p>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export default CounterButton;
