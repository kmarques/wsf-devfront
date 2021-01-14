import React, { createContext, useState, useEffect, useCallback } from "react";

const table = [1, 2, 3];

export const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);

  const addItem = useCallback(
    (name) => {
      setList([...list, name]);
    },
    [list]
  );

  const updateItem = useCallback(
    (name, value) => {
      setList(list.map((item) => (item === name ? value : item)));
    },
    [list]
  );

  const deleteItem = useCallback(
    (name) => {
      setList(list.filter((item) => item !== name));
    },
    [list]
  );

  useEffect(() => {
    console.log("UE1 - List mounted");
    const handler = setTimeout(() => {
      // Sans pagination
      setList(table);
      // Avec pagination
      //setList([...list, ...table]);
    }, 10000);
    return () => {
      console.log("UE1 - List unmounted");
      clearTimeout(handler);
    };
  }, []);

  return <ListContext.Provider value={{list, addItem, updateItem, deleteItem}}>{children}</ListContext.Provider>;
}
