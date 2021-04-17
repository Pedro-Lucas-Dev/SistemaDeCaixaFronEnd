import React, { useState } from "react";
import {
  Avatar,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
  CircularProgress,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import useStyles from "../../../../styles";
import { signIn } from "../../../../service/api";

const Login = ({ history }) => {
  const [dataUserLogin, setDataUserLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    signIn(dataUserLogin)
      .then((response) => {
        localStorage.setItem(
          "@SuaAplicacao:JWT_TOKEN",
          response.data.accessToken
        );
        localStorage.setItem("email", dataUserLogin.email);
        setLoading(false);
        history.push("Main");
      })
      .catch((error) => {
        setErrors(error.response.data.errors);
        setLoading(false);
      });
  };

  const refrestFormDara = (id, value) => {
    setDataUserLogin({ ...dataUserLogin, [id]: value });
  };

  const classes = useStyles();
  const { paper, avatar } = classes;
  const defaultPropsInput = {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <Avatar className={avatar}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <div>
          <TextField
            {...defaultPropsInput}
            name="email"
            id="email"
            label="Email"
            autoComplete="email"
            autoFocus
            onChange={(e) => refrestFormDara(e.target.id, e.target.value)}
          />
          <TextField
            {...defaultPropsInput}
            label="Senha"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => refrestFormDara(e.target.id, e.target.value)}
          />
          {errors.map((error) => {
            return (
              <Typography key={error} color="error" variant="subtitle2">
                {" "}
                {error}{" "}
              </Typography>
            );
          })}
          <Button
            type="submit"
            fullWidth
            onClick={() => handleLogin()}
            color="primary"
            variant="contained"
            disabled={loading}
          >
            {loading ? <CircularProgress size={20} /> : "Entrar"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Ainda não tem uma conta? clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Login;
