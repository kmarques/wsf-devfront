export const getItems = () =>
  fetch("http://localhost:3001/posts").then((res) => res.json());

export const addItem = (name) =>
  fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());

export const updateItem = (item, value) =>
  fetch("http://localhost:3001/posts/" + item.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: item.id, name: value }),
  }).then((res) => res.json());

export const deleteItem = (item) =>
  fetch("http://localhost:3001/posts/" + item.id, {
    method: "DELETE",
  }).then((res) => res.json());
