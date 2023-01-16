import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import votesReducer from './votes';

let reducers = combineReducers({
  votes: votesReducer
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}
