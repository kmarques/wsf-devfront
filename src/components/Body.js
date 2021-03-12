import React from "react";
import { Container } from "@material-ui/core";
import UserList from "./User/List";
import { Switch, Route } from "react-router-dom";
import UserAdd from "./User/Add";
import UserShow from "./User/Show";

export default function Body() {
  return (
    <Container>
      <Switch>
        <Route exact path="/users">
          <UserList />
        </Route>
        <Route path="/users/add">
          <UserAdd />
        </Route>
        <Route path="/users/:username">
          <UserShow />
        </Route>
        <Route path="*">404 Not found</Route>
      </Switch>
    </Container>
  );
}
