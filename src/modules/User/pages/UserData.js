import { Grid, Box } from "@material-ui/core";
import { Edit, Person } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getUserById } from "../../../service/api";

export const UserData = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const userId = localStorage.getItem("id");

  useEffect(() => {
    getUserById().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Layout history={history} titlePage={"Dados Do Usuario"}>
      <Header
        title={`Bem vindo ${user.firstName}`}
        description={"aqui você encontra todos os seus dados"}
        icon={<Person fontSize="large" />}
        iconRight={<Edit fontSize="large" />}
        onPressIconRight={() =>
          history.push(`/edit-user-informations/${userId}`)
        }
      />
      <Grid container spacing={1} direction="column" alignItems="center">
        <Grid item xs={12} sm={4} container>
          <Box
            bgcolor="info.main"
            color="info.contrastText"
            p={2}
            fontSize="large"
          >
            Nome: {user.firstName}
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} container>
          <Box
            bgcolor="info.main"
            color="info.contrastText"
            p={2}
            fontSize="large"
          >
            Sobrenome: {user.lastName}
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} container>
          <Box
            bgcolor="info.main"
            color="info.contrastText"
            p={2}
            fontSize="large"
          >
            Email: {user.email}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
