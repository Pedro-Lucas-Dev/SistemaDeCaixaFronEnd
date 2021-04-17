import React, { useState } from "react";

import {
  Container,
  Button,
  Avatar,
  Grid,
  Link,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { PersonAddRounded } from "@material-ui/icons";
import useStyles from "../../../../styles";
import { confirmRegister } from "./validations";
import { signUp } from "../../../../service/api";
import Alert from "@material-ui/lab/Alert";

const Register = ({ history }) => {
  const FORM_DEFAULT_VALUES = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassaword: "",
  };
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState(FORM_DEFAULT_VALUES);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

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
    setLoading(true);

    signUp(userData).then(() => {
      setLoading(false);
      setSuccessMessage(true);
      setUserData(FORM_DEFAULT_VALUES);
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
          Cadastro de Usuario
        </Typography>
        {successMessage ? (
          <Alert
            action={
              <Button
                onClick={() => history.push("/")}
                color="inherit"
                size="small"
              >
                Login
              </Button>
            }
          >
            {" "}
            Cadastrado Concluido{" "}
          </Alert>
        ) : null}
        <div className={form}>
          <TextField
            name="firstName"
            id="firstName"
            label="Nome"
            autoComplete="firstName"
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
            disabled={Boolean(confirmRegister(userData).length) || loading}
          >
            {loading ? <CircularProgress size={20} /> : null} Cadastrar{" "}
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
