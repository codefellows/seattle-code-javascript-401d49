// import reducer from './reducer';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import categoryReducer from './categories';
import cartReducer from './cart';
// import logger from './middleware/logger';
import thunk from './middleware/thunk';

let reducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
