import cartReducer from '.';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { addItem, removeItem } from '../actions';

describe('Cart reducer', () =>  {
  const reducers = combineReducers({
    cart: cartReducer,
  });
  const store = createStore(reducers);

  test('provides initial state', () => {
    let state = store.getState();

    expect(state.cart.length).toEqual(0);
    expect(state.cart).toBeTruthy();
  });
  test('adds and and removes products', () => {
    let state = store.getState();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}
    expect(state.cart.length).toEqual(0);
    expect(state.cart).toBeTruthy();


    store.dispatch(addItem(productOne));
    store.dispatch(addItem(productTwo));
    let newState = store.getState();

    expect(newState.cart.length).toEqual(2);
    expect(newState.cart[0].name).toEqual('product one')
    expect(newState.cart[1].name).toEqual('product two')

    store.dispatch(removeItem(productOne));
    let newestState = store.getState();

    expect(newestState.cart.length).toEqual(1);
    expect(newestState.cart[0].name).toEqual('product two');
  });
});
