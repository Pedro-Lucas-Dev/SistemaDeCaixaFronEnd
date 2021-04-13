import React, { useState } from "react";

import {
  Container,
  Button,
  Avatar,
  Grid,
  Link,
  TextField,
} from "@material-ui/core";
import { PersonAddRounded } from "@material-ui/icons";
import useStyles from "../../../SignIn/pages/Login/styles";

const Register = () => {
  const [userData, setUserData] = useState({
    fistName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassaword: "",
  });

  const classes = useStyles();
  const { paper, form, submit, avatar } = classes;
  const defaultPropsInput = {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
  };

  const RegisterUserData = () => {
    console.log(userData);
  };

  const saveData = (id, value) => {
    setUserData({ ...userData, [id]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={paper}>
        <Avatar className={avatar}>
          <PersonAddRounded />
        </Avatar>
        <form className={form}>
          <TextField
            name="fistname"
            id="fistName"
            label="Nome"
            autoComplete="fistname"
            autoFocus
            {...defaultPropsInput}
            onChange={(e) => saveData(e.target.id, e.target.value)}
            value={userData.fistName}
          />
          <TextField
            name="lastName"
            label="Sobrenome"
            id="lastName"
            autoComplete="lastName"
            {...defaultPropsInput}
            onChange={(e) => saveData(e.target.id, e.target.value)}
            value={userData.lastName}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            id="email"
            {...defaultPropsInput}
            onChange={(e) => saveData(e.target.id, e.target.value)}
            value={userData.email}
          />
          <TextField
            label="Senha"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...defaultPropsInput}
            onChange={(e) => saveData(e.target.id, e.target.value)}
            value={userData.password}
          />
          <TextField
            label="Confirmar Senha"
            name="confirmpassaword"
            type="password"
            id="confirmpassaword"
            {...defaultPropsInput}
            onChange={(e) => saveData(e.target.id, e.target.value)}
            value={userData.confirmpassaword}
          />
          <Button
            fullWidth
            color="primary"
            variant="contained"
            className={submit}
            onClick={() => RegisterUserData()}
          >
            {" "}
            Cadastrar{" "}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Já tem uma conta? clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
