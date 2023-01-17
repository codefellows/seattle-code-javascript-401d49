import reducer from './reducer';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

let reducers = combineReducers({
  products: reducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();
