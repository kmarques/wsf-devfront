import React, { useState } from "react";

function ItemList({ item, deleteItem }) {
  return (
    <li>
      {item}
      <button onClick={deleteItem}> Supprimer</button>
    </li>
  );
}

export default ItemList;
