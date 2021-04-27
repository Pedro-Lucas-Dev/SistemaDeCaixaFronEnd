import { Typography } from "@material-ui/core";
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

  useEffect(() => {
    getUserById().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Layout history={history} titlePage={"Dados Do Usuario"}>
      <Header />
      <Typography> Nome: {user.firstName} </Typography>
      <Typography> Sobrenome: {user.lastName} </Typography>
      <Typography> Email: {user.email} </Typography>
    </Layout>
  );
};
