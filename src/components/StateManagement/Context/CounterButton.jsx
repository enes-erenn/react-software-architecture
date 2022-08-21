import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterButton = () => {
  const { counter, handleCount } = useContext(CounterContext);

  return (
    <>
      <p>You have clicked the button {counter} times.</p>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export default CounterButton;
