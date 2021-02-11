import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import AddCartForm from "../Cart/AddCartForm";

export default function ProductItem({ product }) {
  const {
    selectors: { hasProduct },
  } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img />
      <span
        style={{
          backgroundColor: hasProduct(product) ? "green" : "transparent",
        }}
      >
        {product.name}
      </span>
      <span>{product.price}€</span>
    </div>
  );
}
