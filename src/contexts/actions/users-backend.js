export const getUsers = async (page = 1, itemsPerPage = 20) => {
  const response = await fetch(
    `http://localhost:3000/users?offset=${
      (page - 1) * itemsPerPage
    }&limit=${itemsPerPage}`
  );
  const responseDecoded = await response.json();
  return responseDecoded.data;
};

export const addUser = (user) =>
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ users: [user] }),
  })
    .then((res) => res.json())
    .then((responseDecoded) => responseDecoded.data);
