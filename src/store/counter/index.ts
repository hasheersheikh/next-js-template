import { decrement, increment } from "./actions";

export const initalState = {
  count: 0,
};

const reducer = (state = initalState, action: any) => {
  const newState = { ...state };
  if (action.type === increment.type) {
    newState.count++;
  }
  if (action.type === decrement.type) {
    newState.count--;
  }
  console.log(newState, action);
  return newState;
};

export default reducer;
