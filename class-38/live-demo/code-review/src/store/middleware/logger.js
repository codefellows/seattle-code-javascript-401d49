// why am I doing this:  log the action in the console as a precursor to thunk
// goal: use middleware in a way that redux likes
// notice:  redux is "function heavy" aka it favors functions and I can curry information using multiple functions

const logger = (store) => (next) => (action) => {
  // here I can do the thing
  console.log('___action___', action);
  next(action);
};

export default logger;
