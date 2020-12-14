import React, { useMemo } from "react";

function ItemList({ item, deleteItem }) {
  return useMemo(
    () => (
      <li>
        {item}
        <button onClick={deleteItem}> Supprimer</button>
      </li>
    ),
    [item, deleteItem]
  );
}

export default ItemList;
