import React, { createContext, useState, useEffect, useCallback } from "react";
import * as backend from "./actions/list-backend";
import * as storage from "./actions/list-localstorage";

const repo = backend;

export const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);
  const [received, setReceived] = useState(false);

  useEffect(() => {
    setTimeout(
      () => repo.getItems().then((data) => setList(data) || setReceived(true)),
      5000
    );
  }, []);

  const actions = {
    addItem: useCallback(
      (name) => {
        return repo.addItem(name).then((data) => setList([...list, data]));
      },
      [list]
    ),
    updateItem: useCallback(
      (item, value) => {
        return repo
          .updateItem(item, value)
          .then((data) =>
            setList(list.map((elem) => (elem.id === item.id ? data : elem)))
          );
      },
      [list]
    ),
    deleteItem: useCallback(
      (item) => {
        return repo
          .deleteItem(item)
          .then(() => setList(list.filter((elem) => elem.id !== item.id)));
      },
      [list]
    ),
  };

  const selectors = {
    getItems: () => list,
    getNbItems: () => list.length,
    getItem: (id) => list.find((elem) => elem.id === id),
    isItemsReceived: () => received,
  };

  return (
    <ListContext.Provider value={{ selectors, actions }}>
      {children}
    </ListContext.Provider>
  );
}
