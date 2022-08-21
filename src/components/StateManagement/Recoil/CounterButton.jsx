import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterSelector } from "./counterSelector";
import { counterState } from "./counterState";

const CounterButton = () => {
  const counter = useRecoilValue(counterSelector);
  const [counterData, setCounterData] = useRecoilState(counterState);

  return (
    <>
      <p>You have clicked the button {counter} times.</p>
      <button
        onClick={() =>
          setCounterData([...counterData, { timestamp: Date.now(), amount: 1 }])
        }
      >
        Click
      </button>
    </>
  );
};

export default CounterButton;
