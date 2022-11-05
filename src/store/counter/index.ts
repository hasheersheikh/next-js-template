export const initalState = {
  count: 0,
};

const counterReducer = (state = initalState, action: any) => {
  const newState = { ...state };
  if (action.type === `INCREMENT`) {
    newState.count++;
  }
  if (action.type === `DECREMENT`) {
    newState.count--;
  }
  return newState;
};

export default counterReducer;
