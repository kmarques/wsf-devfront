export const initialState = {
  cart: [],
};

/**
 * action => {
 *  type: String,
 *  payload: any
 * }
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_CART":
      return {
        ...state,
        cart: state.cart.map((elem) =>
          elem.product.id === action.payload.product.id ? action.payload : elem
        ),
      };
    case "DELETE_CART":
      return {
        ...state,
        cart: state.cart.filter((elem) => elem.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
