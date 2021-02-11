import React, { useState } from "react";

function ItemForm({
  onSubmit,
  submitLabel = "Add Item",
  inputLabel = "Item name",
  defaultName = "",
  inputType = "text",
}) {
  const [name, setName] = useState(defaultName);

  return (
    <div>
      <label htmlFor="name">{inputLabel}</label>
      <input
        id="name"
        type={inputType}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          onSubmit(name);
          setName("");
        }}
      >
        {submitLabel}
      </button>
    </div>
  );
}

export default ItemForm;
