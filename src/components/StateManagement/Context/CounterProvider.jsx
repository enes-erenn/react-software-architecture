import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, handleCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
