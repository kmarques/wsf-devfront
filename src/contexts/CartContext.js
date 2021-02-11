import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/cart";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    addToCart: function (product, quantity) {
      if (selectors.hasProduct(product))
        return this.updateCartItem(product, quantity);
      return dispatch({
        type: "ADD_TO_CART",
        payload: { product, quantity },
      });
    },
    updateCartItem: (product, quantity) => {
      return dispatch({
        type: "UPDATE_CART",
        payload: { product, quantity },
      });
    },
    deleteItem: (product) => {
      return dispatch({
        type: "DELETE_CART",
        payload: product,
      });
    },
    clear: () => {
      return dispatch({
        type: "CLEAR_CART",
      });
    },
  };

  const selectors = {
    getCart: () => state.cart,
    getTotalPrice: () =>
      state.cart.reduce(
        (carry, item) => carry + item.product.price * item.quantity,
        0
      ),
    hasProduct: (product) =>
      state.cart.find((item) => item.product.id === product.id) !== undefined,
  };

  return (
    <CartContext.Provider value={{ selectors, actions }}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * Exemple d'implémentation de useReducer
 * const useReducer = (reducer, initialState) => {
 * const [state, setState] = useState(initialState);
 *
 * const dispatch = (action) => setState(reducer(state, action));
 *
 * return [state, dispatch];
 * };
 */
