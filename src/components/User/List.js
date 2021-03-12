import {
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useMemo } from "react";
import useUserManager from "../../hooks/useUserManager";

export default function UserList() {
  const {
    users,
    getUsers,
    loadMore,
    isLast,
    perPage,
    setPerPage,
  } = useUserManager();

  const renderUsers = useMemo(
    () => (
      <List>
        {(users || []).map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={`${user.id} - ${user.last_name?.toUpperCase()} ${
                user.first_name
              }`}
              secondary={`${user.username} - ${user.created_at}`}
            />
          </ListItem>
        ))}
      </List>
    ),
    [users]
  );

  return (
    <>
      {users && (
        <>
          <Select value={perPage} onChange={(e) => setPerPage(e.target.value)}>
            {[20, 50, 100].map((val) => (
              <MenuItem value={val}>{val}</MenuItem>
            ))}
          </Select>
          {renderUsers}
        </>
      )}
      {users === undefined && "User not loaded"}
      {!isLast && (
        <button onClick={users === undefined ? getUsers : loadMore}>
          {users === undefined ? "Load users" : "Load More"}
        </button>
      )}
    </>
  );
}
