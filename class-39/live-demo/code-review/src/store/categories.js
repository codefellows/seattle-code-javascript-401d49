const initialState = {
  categories: [],
  activeCategory: '',
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: payload,
      }
    case 'SET-CATEGORIES':
      return {
        ...state,
        categories: payload
      }
    case 'RESET':
      return initialState;
    default:
      return state
  }
};

export default categoryReducer;
