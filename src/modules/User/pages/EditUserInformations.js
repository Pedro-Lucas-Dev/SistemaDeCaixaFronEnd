import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";

export const EditUser = ({ history }) => {
  return (
    <Layout history={history} titlePage={"Gerenciar Dados"}>
      <Header
        title={"Gerenciar Dados"}
        description={"Aqui você gerencia seus dados"}
      />

      <Grid container direction="column" justify="center" alignItems="center">
        <TextField />
        <TextField />
        <TextField />
        <Button>Salvar Alterações</Button>
      </Grid>
    </Layout>
  );
};
