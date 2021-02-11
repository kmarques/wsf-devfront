import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductItem from "../Product/ProductItem";
import AddCartForm from "./AddCartForm";

export default function Cart() {
  const {
    actions,
    selectors: { getCart, getTotalPrice },
  } = useContext(CartContext);
  const products = getCart();
  return (
    products.length > 0 && (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Cart</h1>
        {products.map((item) => (
          <div key={item.product.id}>
            <ProductItem product={item.product} />
            <AddCartForm
              onSubmit={(quantity) => actions.addToCart(item.product, quantity)}
              defaultValue={item.quantity}
              submitLabel={"Update"}
            />
            <span>Cost: {item.product.price * item.quantity} €</span>
          </div>
        ))}
        <span>Total Price: {getTotalPrice()} €</span>
      </div>
    )
  );
}
