import React, { useState } from "react";
import useStyles from "../../styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft,
  ArrowDownward,
  Home,
} from "@material-ui/icons";

// TODO Implementar Dropdown
// Implementar DropDown Categorias
// Sub Item Listar
// Sub Item Cadastrar

export const Menu = ({ titlePage, handleLogout, history }) => {
  const { menu, title, buttonIcon, drawer, drawerPaper } = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={menu}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={buttonIcon}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
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
      <Drawer
        className={drawer}
        open={open}
        anchor="left"
        variant="persistent"
        classes={{ paper: drawerPaper }}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => history.push("/main")}>
            <ListItemIcon>
              {" "}
              <Home />{" "}
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/register-category")}>
            <ListItemIcon>
              {" "}
              <ArrowDownward />{" "}
            </ListItemIcon>
            <ListItemText>Nova Categoria</ListItemText>
          </ListItem>
          <ListItem button onClick={() => history.push("/categories")}>
            <ListItemText>Listar categorias</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};