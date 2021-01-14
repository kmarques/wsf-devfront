import React, { createContext, useState, useEffect, useCallback } from "react";

const table = [1, 2, 3];

export const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  const addItem = useCallback(
    (name) => {
      return fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name }),
      })
        .then((res) => res.json())
        .then((data) => setList([...list, data]));
    },
    [list]
  );

  const updateItem = useCallback(
    (item, value) => {
      return fetch("http://localhost:3000/posts/" + item.id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: item.id, name: value }),
      })
        .then((res) => res.json())
        .then((data) =>
          setList(list.map((elem) => (elem.id === item.id ? data : elem)))
        );
    },
    [list]
  );

  const deleteItem = useCallback(
    (item) => {
      return fetch("http://localhost:3000/posts/" + item.id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => setList(list.filter((elem) => elem.id !== item.id)));
    },
    [list]
  );

  return (
    <ListContext.Provider value={{ list, addItem, updateItem, deleteItem }}>
      {children}
    </ListContext.Provider>
  );
}
