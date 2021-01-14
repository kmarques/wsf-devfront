import React, { useContext, useState } from "react";
import { ListContext } from "../../contexts/ListContext";

function ItemForm({onSubmit, defaultName = ""}) {
  const [name, setName] = useState(defaultName);

  return (
    <div>
      <label htmlFor="name">Label</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          onSubmit(name);
          setName("");
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default ItemForm;
