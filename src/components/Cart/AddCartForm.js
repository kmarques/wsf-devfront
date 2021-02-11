import { Button, IconButton, TextField } from "@material-ui/core";
import { RemoveCircleOutline, AddCircleOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

export default function AddCartForm({
  onSubmit,
  submitLabel = "Add to cart",
  defaultValue = 0,
}) {
  const [quantity, setQuantity] = useState(defaultValue);

  useEffect(() => setQuantity(defaultValue), [defaultValue]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <IconButton
          aria-label="less"
          onClick={(_) => setQuantity(quantity - 1)}
        >
          <RemoveCircleOutline />
        </IconButton>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <IconButton
          aria-label="more"
          onClick={(_) => setQuantity(quantity + 1)}
        >
          <AddCircleOutlined />
        </IconButton>
      </div>
      {quantity > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={(_) => onSubmit(quantity)}
        >
          {submitLabel}
        </Button>
      )}
    </div>
  );
}
