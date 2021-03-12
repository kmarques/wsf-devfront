import React, { useState } from "react";
import useUserManager from "../../hooks/useUserManager";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router";

export default function UserShow() {
  const params = useParams();

  return (
    <Grid container direction="column">
      {JSON.stringify(params)}
    </Grid>
  );
}
