import { Grid, Button } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import React from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";

export const Sales = ({ history }) => {
  return (
    <Layout history={history} titlePage={"Compras"}>
      <Header
        title={"Bem vindo a tela de compras"}
        description={
          "Aqui sera feita todo o processo de compra relacionado a um produto"
        }
      />
      <Grid container direction="column" justify="center" alignItems="center">
        <Button variant="contained" color="primary" size="large">
          <AddCircle fontSize={"large"} />
        </Button>
      </Grid>
    </Layout>
  );
};
