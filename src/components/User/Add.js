import React, { useState } from "react";
import useUserManager from "../../hooks/useUserManager";
import { Grid, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";

export default function UserAdd() {
  const { add } = useUserManager();
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    // const key  = e.target.name;
    // const newData = {...formData};
    // newData[key] = e.target.value
    // setFormData(newData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container direction="column">
      <Grid item container alignItems="center" justify="space-around">
        <Grid item>
          <TextField
            name="username"
            value={formData.username}
            label="Username"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="email"
            value={formData.email}
            label="Email"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justify="space-around">
        <Grid item>
          <TextField
            name="last_name"
            value={formData.last_name}
            label="Lastname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="first_name"
            value={formData.first_name}
            label="Firstname"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={() =>
          add(formData).then(() => {
            setFormData({});
            history.push("/users");
          })
        }
      >
        Submit
      </Button>
    </Grid>
  );
}
