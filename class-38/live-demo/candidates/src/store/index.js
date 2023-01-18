import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import votesReducer from './votes';
import candidatesReducer from './candidates';
import todoReducer from './todo';
import thunk from 'redux-thunk';
// import thunk from './middleware/thunk';


let reducers = combineReducers({
  totalVotes: votesReducer,
  candidates: candidatesReducer,
  todos: todoReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
