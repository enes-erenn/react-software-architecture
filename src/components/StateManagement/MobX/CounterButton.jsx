import React from "react";
import { observer } from "mobx-react-lite";

const CounterButton = observer(({ counter }) => {
  return (
    <>
      <p>You have clicked the button {counter.count} times.</p>
      <button onClick={() => counter.handleIncrement(1)}>Click</button>
    </>
  );
});

export default CounterButton;
