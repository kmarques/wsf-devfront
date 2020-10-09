import React, { useState } from "react";

function ItemForm({ onSubmit }) {
  const [name, setName] = useState("");
  return (
    <div>
      <label for="name">Label</label>
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
