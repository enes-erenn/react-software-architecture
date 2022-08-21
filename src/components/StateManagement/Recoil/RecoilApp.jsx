import React from "react";
import { RecoilRoot } from "recoil";
import CounterButton from "./CounterButton";

const RecoilApp = () => {
  return (
    <RecoilRoot>
      <CounterButton />
    </RecoilRoot>
  );
};

export default RecoilApp;
