import React, { useContext, useMemo, useState } from "react";
import { ListContext } from "../../contexts/ListContext";
import ItemForm from "./ItemForm";

function ItemList({ item }) {
  const { deleteItem, updateItem } = useContext(ListContext);
  const [bool, setBool] = useState(false);

  const toggleEditItem = () => {
    setBool(!bool);
  };

  return useMemo(
    () => (
      <li>
        {!bool && item}
        {bool && (
          <ItemForm
            onSubmit={(value) => updateItem(item, value)}
            defaultName={item}
          />
        )}
        <button onClick={() => deleteItem(item)}> Supprimer</button>
        <button onClick={() => toggleEditItem()}>Editer</button>
      </li>
    ),
    [item, deleteItem, toggleEditItem, updateItem]
  );
}

export default ItemList;
