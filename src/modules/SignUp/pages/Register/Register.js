import React, { useState } from "react";

import {
  Container,
  Button,
  Avatar,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { PersonAddRounded } from "@material-ui/icons";
import useStyles from "../../../Main/pages/styles";
import { confirmRegister } from "./validations";
import { signUp } from "../../../../service/api";

const Register = ({ history }) => {
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    fistName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassaword: "",
  });

  const classes = useStyles();
  const { paper, form, avatar } = classes;
  const defaultPropsInput = {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
  };

  const RegisterUserData = () => {
    const hasError = confirmRegister(userData);
    if (hasError.length) {
      setErrors(hasError);
      return;
    }

    signUp(userData).then(() => {
      history.push("/");
    });
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
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <div className={form}>
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
          {errors.map((erro) => {
            return (
              <Typography color="error" variant="subtitle2" key={erro.field}>
                {erro.message}
              </Typography>
            );
          })}
          <Button
            fullWidth
            color="primary"
            variant="contained"
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
        </div>
      </div>
    </Container>
  );
};

export default Register;
