import React from "react";
import { Provider } from "react-redux";
import CounterButton from "./CounterButton";
import { store } from "./store";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <CounterButton />
    </Provider>
  );
};

export default ReduxApp;
