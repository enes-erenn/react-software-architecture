import { selector } from "recoil";
import { counterState } from "./counterState";

export const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => {
    const clicksData = get(counterState);

    const totalCount = clicksData.reduce((sum, click) => {
      return sum + click.amount;
    }, 0);

    return totalCount;
  },
});
