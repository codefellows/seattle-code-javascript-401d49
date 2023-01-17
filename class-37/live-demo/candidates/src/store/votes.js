const initialState = 0;

const votesReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default votesReducer;
