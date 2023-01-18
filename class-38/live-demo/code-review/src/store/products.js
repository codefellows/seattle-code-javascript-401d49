const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SELECT_CATEGORY':
      return initialState.filter(product => product.category === payload);
    case 'RESET':
      return initialState;
    default:
      return state
  }
};

export default productsReducer;

