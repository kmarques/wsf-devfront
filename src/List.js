import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function List() {
  const [list, setList] = useState([1, 2, 3]);
  const deleteItem = (name) => {
    setList(list.filter((item) => item !== name));
  };
  const addItem = (name) => {
    setList([name, ...list]);
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <ItemList
            item={item}
            key={item}
            deleteItem={() => deleteItem(item)}
          />
        ))}
      </ul>
      <ItemForm onSubmit={addItem} />
    </div>
  );
}

export default List;
