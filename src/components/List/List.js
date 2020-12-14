import React, { useState, useEffect, useMemo, useCallback } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Search from "./SearchAutocomplete";

const table = [1, 2, 3];
/**
 * Exo 1 - v1
 * - Créer un champs de recherche (input text + useState)
 * - Créer une liste filtrée par le champs de recherche (useState + useEffect)
 * - Utiliser la liste filtrée pour l'affichage
 */
function List() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("");
  const [bool, setBool] = useState(true);

  const addItem = (name) => {
    setList([...list, name]);
  };
  const updateItem = (name, value) => {
    setList(list.map((item) => (item === name ? value : item)));
  };

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

  useEffect(() => {
    console.log("UE2 - List mounted/updated");
    return () => {
      console.log("UE2 - List unmounted");
    };
  }, [list]);

  const listFiltered = useMemo(() => {
    console.log("Update filtered list");
    return list.filter((item) => item.toString().startsWith(filter));
  }, [list, filter]);

  const deleteItem = useCallback((name) => {
    return () => setList(list.filter((item) => item !== name));
  }, []);

  return (
    <div>
      <button onClick={() => setBool(!bool)}>toggle</button>
      <Search filter={filter} setFilter={setFilter} choices={list} />
      <ul>
        {listFiltered.map((item) => (
          <ItemList key={item} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
      <ItemForm onSubmit={addItem} />
    </div>
  );
}

export default List;
