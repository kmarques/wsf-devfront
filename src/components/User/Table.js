import {
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
} from "@material-ui/core";
import React, { useMemo } from "react";
import useUserManager from "../../hooks/useUserManager";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "Column 1", width: 150, hide: true },
  { field: "username", headerName: "Username", width: 150 },
  { field: "first_name", headerName: "Firstname", width: 150 },
  { field: "last_name", headerName: "Lastname", width: 150 },
];

export default function UserTable() {
  const {
    users,
    getUsers,
    loadMore,
    isLast,
    perPage,
    setPerPage,
    page,
    setPage,
    getUsersPage,
  } = useUserManager(true);

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={users || []}
        columns={columns}
        pagination
        paginationMode="server"
        onPageChange={getUsersPage}
        pageSize={perPage}
        rowCount={
          (users || []).length % (page * perPage) === 0
            ? page * perPage
            : (users || []).length
        }
      />
    </div>
  );
}
