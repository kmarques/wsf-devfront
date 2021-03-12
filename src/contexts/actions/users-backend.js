export const getUsers = async (page = 1, itemsPerPage = 20) => {
  const response = await fetch(
    `http://localhost:3000/users?offset=${
      (page - 1) * itemsPerPage
    }&limit=${itemsPerPage}`
  );
  const responseDecoded = await response.json();
  return responseDecoded.data;
};

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
