import React from "react";
import CounterButton from "./CounterButton";
import CounterProvider from "./CounterProvider";

const ContextApp = () => {
  return (
    <CounterProvider>
      <CounterButton />
    </CounterProvider>
  );
};

export default ContextApp;
