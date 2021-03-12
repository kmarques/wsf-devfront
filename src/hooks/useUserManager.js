import { useState, useEffect } from "react";
import { getUsers as fetchUsers } from "../contexts/actions/users-backend";

export default function useUserManager(loadOnMount = false) {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(0);
  const [isLast, setLast] = useState(false);
  const [perPage, setPerPage] = useState(20);

  const getUsers = () => {
    fetchUsers(1, perPage).then(
      (_users) =>
        setUsers(_users) || setPage(1) || setLast(_users.length < perPage)
    );
  };

  const loadMore = () => {
    if (!isLast)
      fetchUsers(page + 1, perPage).then((_users) => {
        setUsers([...users, ..._users]);
        setPage(page + 1);
        setLast(_users.length < perPage);
      });
  };

  useEffect(() => {
    if (loadOnMount || users !== undefined) getUsers();
  }, [perPage]);

  return { users, isLast, loadMore, getUsers, perPage, setPerPage };
}
