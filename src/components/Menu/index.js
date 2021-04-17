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
  People,
  Person,
  Home,
} from "@material-ui/icons";

export const Menu = ({ titlePage, handleLogout }) => {
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
          <ListItem>
            <ListItemIcon>
              {" "}
              <Home />{" "}
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <Person />{" "}
            </ListItemIcon>
            <ListItemText>Usuario</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              {" "}
              <People />{" "}
            </ListItemIcon>
            <ListItemText>Listar Usuarios</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
