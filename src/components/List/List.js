import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from "react";
import { ListContext } from "../../contexts/ListContext";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import Search from "./SearchAutocomplete";

function SayHi() {
  const [state, setstate] = useState("");

  return (
    <div>
      <button onClick={() => setstate(Date.now())}>Display date</button>
      {state}
    </div>
  );
}
/**
 * Exo 1 - v1
 * - Créer un champs de recherche (input text + useState)
 * - Créer une liste filtrée par le champs de recherche (useState + useEffect)
 * - Utiliser la liste filtrée pour l'affichage
 */
function List() {
  const { list, addItem } = useContext(ListContext);
  const [filter, setFilter] = useState("");
  const [bool, setBool] = useState(true);

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

  const toggleBool = useCallback(() => {
    return () => setBool(!bool);
  }, [bool]);

  return useMemo(
    () => (
      <div>
        <button onClick={toggleBool}>toggle</button>
        <Search filter={filter} setFilter={setFilter} choices={list} />
        <ul>
          {listFiltered.map((item) => (
            <ItemList key={item} item={item} />
          ))}
        </ul>
        <ItemForm onSubmit={addItem}/>
        <SayHi />
      </div>
    ),
    [toggleBool, filter, listFiltered, list]
  );
}

export default List;
