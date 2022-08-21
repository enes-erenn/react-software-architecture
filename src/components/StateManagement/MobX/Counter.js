import { makeObservable, observable, action } from "mobx";

export class Counter {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      handleIncrement: action,
    });
  }

  handleIncrement = (amount) => {
    this.count += amount;
  };
}
