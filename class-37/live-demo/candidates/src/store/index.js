import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import votesReducer from './votes';
import candidatesReducer from './candidates';

let reducers = combineReducers({
  totalVotes: votesReducer,
  candidates: candidatesReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}
