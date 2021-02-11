import React, { createContext, useEffect, useReducer } from "react";
import * as backend from "./actions/products-backend";
import { reducer, initialState } from "./reducers/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(
      () =>
        backend
          .getProducts()
          .then((data) => dispatch({ type: "GET_PRODUCTS", payload: data })),
      5000
    );
  }, []);

  const actions = {
    getProducts: () =>
      backend
        .getProducts()
        .then((data) => dispatch({ type: "GET_PRODUCTS", payload: data })),
  };

  const selectors = {
    getProducts: () => state.products,
    isReceived: () => state.received,
  };

  return (
    <ProductContext.Provider value={{ selectors, actions }}>
      {children}
    </ProductContext.Provider>
  );
};
