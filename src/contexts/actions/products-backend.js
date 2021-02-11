export const getProducts = () =>
  fetch("http://localhost:3001/products").then((res) => res.json());
