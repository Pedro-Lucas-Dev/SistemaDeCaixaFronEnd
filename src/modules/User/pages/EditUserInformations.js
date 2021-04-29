import { Button, Grid, TextField } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { uptadeUserDataService, getUserById } from "../../../service/api";
import { showMessage } from "../../../utils/messenge";

export const EditUser = ({ history }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    refresh();
  }, []);

  const handleSendDataUptade = (userData) => {
    uptadeUserDataService(userData).then(() => {
      showMessage("Deu Certo", "Todas as Alterações foram salvas");
      localStorage.setItem(
        "name",
        `${userData.firstName} ${userData.lastName}`
      );
      refresh();
    });
  };
  const handleChangeData = (id, value) => {
    setUserData({ ...userData, [id]: value });
  };

  const refresh = () => {
    getUserById().then((response) => {
      setUserData(response.data);
    });
  };

  return (
    <Layout history={history} titlePage={"Gerenciar Dados"}>
      <Header
        title={"Gerenciar Dados"}
        description={"Aqui você gerencia seus dados"}
        icon={<Settings fontSize="large" />}
      />

      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          variant="outlined"
          margin="normal"
          label="nome"
          id="firstName"
          value={userData.firstName}
          onChange={(e) => handleChangeData(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="sobrenome"
          id="lastName"
          value={userData.lastName}
          onChange={(e) => handleChangeData(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="email"
          id="email"
          value={userData.email}
          onChange={(e) => handleChangeData(e.target.id, e.target.value)}
        />
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSendDataUptade(userData)}
          >
            Salvar Alterações
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/main")}
          >
            cancela
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};
