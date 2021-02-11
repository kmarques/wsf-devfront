export const getItems = async () => localStorage.getItem("list");

export const addItem = async (name) => {
  const list = JSON.parse(localStorage.getItem("list"));
  list.push({ id: Date.now(), name });
  localStorage.setItem("list", list);
  return { name };
};

export const updateItem = async (item, value) => {
  let list = JSON.parse(localStorage.getItem("list"));
  list = list.map((elem) => (elem.id === item.id ? { value } : elem));
  localStorage.setItem("list", list);
  return { value };
};

export const deleteItem = async (item) => {
  let list = JSON.parse(localStorage.getItem("list"));
  list = list.filter((elem) => elem.id !== item.id);
  localStorage.setItem("list", list);
};
