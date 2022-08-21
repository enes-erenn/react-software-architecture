import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "./actions";
import { getCounter } from "./selectors";

const CounterButton = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  const handleCount = () => {
    dispatch(incrementCounter(1));
  };

  return (
    <>
      <p>You have clicked the button {counter} times.</p>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export default CounterButton;
