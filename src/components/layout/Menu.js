import React from "react";
import useStyles from "../../styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { List } from "@material-ui/icons";

export const Menu = ({ titlePage, handleLogout }) => {
  const { menu, title, buttonIcon } = useStyles();
  return (
    <div className={menu}>
      <AppBar color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={buttonIcon}
            color="inherit"
            aria-label="menu"
          >
            <List />
          </IconButton>

          <Typography variant="h6" className={title}>
            {titlePage}
          </Typography>
          <Button
            onClick={() => handleLogout()}
            color="secondary"
            variant="contained"
          >
            Sair{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
