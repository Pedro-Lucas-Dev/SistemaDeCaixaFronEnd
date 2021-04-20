import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { Button, Grid, TextField } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import { newCategoryService } from "../../../service/api";

// TODO  Tarefas adicionais
// Aplicar Loading
// Zerar formulario
// Mostrar Alert para usuário sendo sucesso || Error
export const RegisterCategory = ({ history }) => {
  const [nameOfCategory, setNameOfCategory] = useState("");

  const addCategory = () => {
    newCategoryService(nameOfCategory)
      .then((response) => {
        console.log("funcionou");
      })
      .catch((error) => {
        console.log("deu error");
      });
  };

  return (
    <Layout history={history} titlePage="Categoria">
      <Header
        title={"Bem vindo a Tela de Cadastro"}
        description={"Essa é a nossa tela de Adicionar uma nova categoria"}
        icon={<Apps fontSize={"large"} />}
      />
      <Grid>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          Width={50}
          id="categoryName"
          label="Nome da Categoria"
          onChange={(e) => setNameOfCategory(e.target.value)}
        />
      </Grid>

      <Button color="primary" variant="contained" onClick={addCategory}>
        Cadastrar
      </Button>
    </Layout>
  );
};
