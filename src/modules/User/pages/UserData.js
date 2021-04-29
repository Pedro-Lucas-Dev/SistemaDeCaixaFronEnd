import { Grid, Box, Typography } from "@material-ui/core";
import { AlternateEmail, Edit, Person } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getUserById } from "../../../service/api";
import md5 from "crypto-js/md5";

export const UserData = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const userId = localStorage.getItem("id");
  const fullNameUser = localStorage.getItem("name");

  useEffect(() => {
    getUserById().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Layout history={history} titlePage={"Dados Do Usuario"}>
      <Header
        title={"Dados Pessoais"}
        description={"aqui você encontra todos os seus dados"}
        icon={<Person fontSize="large" />}
        iconRight={<Edit fontSize="large" />}
        onPressIconRight={() =>
          history.push(`/edit-user-informations/${userId}`)
        }
      />
      <Grid container spacing={1} direction="column" alignItems="center">
        <img
          src={`https://www.gravatar.com/avatar/${md5(user.email)}?d=robohash`}
        />
        <Box p={4}>
          <Typography variant="h4" align="center">
            {" "}
            {fullNameUser}{" "}
          </Typography>
        </Box>

        <Box
          p={2}
          flexDirection="row"
          display="flex"
          width={250}
          bgcolor="#ffef62"
          justifyContent="space-between"
          boxShadow={3}
          borderRadius={150}
        >
          <AlternateEmail />

          <Typography variant="body2" align="center" color="primary">
            {" "}
            {user.email}{" "}
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};
