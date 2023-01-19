import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo';
import candidatesReducer from './candidates';

const store = () => configureStore({
  reducer: {
    todos: todoReducer,
    candidates: candidatesReducer
  }
});

export default store();
