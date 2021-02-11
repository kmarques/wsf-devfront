export const initialState = {
  products: [],
  received: false,
};

/**
 * action => {
 *  type: String,
 *  payload: any
 * }
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: action.payload,
        received: true,
      };
    default:
      return state;
  }
};
