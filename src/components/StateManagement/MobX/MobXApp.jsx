import React from "react";
import { Counter } from "./Counter";
import CounterButton from "./CounterButton";

const MobXApp = () => {
  const counter = new Counter();

  return (
    <>
      MobXApp
      <CounterButton counter={counter} />
    </>
  );
};

export default MobXApp;
