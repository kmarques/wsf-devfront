import React, {
  createContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import * as backend from "./actions/list-backend";
import * as storage from "./actions/list-localstorage";
import { initialState, reducer } from "./reducers/list";

const repo = storage;

export const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(
      () =>
        repo.getItems().then((data) =>
          dispatch({
            type: "GET_ITEMS",
            payload: data,
          })
        ),
      5000
    );
  }, []);

  const actions = {
    addItem: useCallback(
      (name) => {
        return repo.addItem(name).then((data) =>
          dispatch({
            type: "ADD_ITEM",
            payload: data,
          })
        );
      },
      [state.list]
    ),
    updateItem: useCallback(
      (item, value) => {
        return repo.updateItem(item, value).then((data) =>
          dispatch({
            type: "UPDATE_ITEM",
            payload: data,
          })
        );
      },
      [state.list]
    ),
    deleteItem: useCallback(
      (item) => {
        return repo.deleteItem(item).then(() =>
          dispatch({
            type: "DELETE_ITEM",
            payload: item,
          })
        );
      },
      [state.list]
    ),
  };

  const selectors = {
    getItems: () => state.list,
    getNbItems: () => state.list.length,
    getItem: (id) => state.list.find((elem) => elem.id === id),
    isItemsReceived: () => state.received,
  };

  return (
    <ListContext.Provider value={{ selectors, actions }}>
      {children}
    </ListContext.Provider>
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
