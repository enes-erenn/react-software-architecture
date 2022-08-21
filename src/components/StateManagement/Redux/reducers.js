export const counterReducer = (state = 0, action) => {
  const { type } = action;

  switch (type) {
    case "INCREMENT_COUNTER":
      return state + action.payload.amount;
    default:
      return state;
  }
};
