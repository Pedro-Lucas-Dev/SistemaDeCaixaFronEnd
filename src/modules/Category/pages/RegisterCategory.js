import React, { useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { Button, Grid, TextField, CircularProgress } from "@material-ui/core";
import { Apps, Menu } from "@material-ui/icons";
import { newCategoryService } from "../../../service/api";
import { showMessage } from "../../../utils/messenge";

// TODO  Tarefas adicionais
// Zerar formulario
// Mostrar Alert para usuário sendo sucesso || Error
export const RegisterCategory = ({ history }) => {
  const [nameOfCategory, setNameOfCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const addCategory = () => {
    setLoading(true);
    newCategoryService(nameOfCategory)
      .then(() => {
        setLoading(false);
        showMessage("Deu certo!", "Cadastro Realizado com sucesso");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <Layout history={history} titlePage="Categoria">
      <Header
        title={"Bem vindo a Tela de Cadastro"}
        description={"Essa é a nossa tela de Adicionar uma nova categoria"}
        icon={<Apps fontSize={"large"} />}
        iconRight={<Menu fontSize={"large"} />}
        onPressIconRight={() => history.push("/categories")}
      />
      <Grid>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="categoryName"
          label="Nome da Categoria"
          onChange={(e) => setNameOfCategory(e.target.value)}
        />
      </Grid>
      <Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={addCategory}
          disabled={loading || !nameOfCategory}
        >
          Cadastrar
          {loading && <CircularProgress size={20} />}
        </Button>
      </Grid>
    </Layout>
  );
};
