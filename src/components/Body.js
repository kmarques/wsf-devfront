import React from "react";
import { Container } from "@material-ui/core";
import UserList from "./User/List";

export default function Body() {
  return (
    <Container>
      <UserList />
    </Container>
  );
}
