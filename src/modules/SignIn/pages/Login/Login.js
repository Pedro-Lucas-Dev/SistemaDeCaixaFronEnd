import React from "react";
import {
  Avatar,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import useStyles from "./styles";

const Login = ({ history }) => {
  const handleLogin = () => {
    localStorage.setItem("@SuaAplicacao:JWT_TOKEN", "seutokenjwt");

    history.push("Main");
  };
  const classes = useStyles();
  const { paper, avatar, form, submit } = classes;
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
          Sign in
        </Typography>
        <form onSubmit={handleLogin} className={form} noValidate>
          <TextField
            {...defaultPropsInput}
            name="email"
            id="email"
            label="Email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            {...defaultPropsInput}
            label="Senha"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            className={submit}
            color="primary"
            variant="contained"
          >
            {" "}
            Entrar{" "}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Ainda não tem uma conta? clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
