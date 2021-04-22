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
  Collapse,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft,
  ExpandLess,
  ExpandMore,
  Home,
  Settings,
  Storefront,
} from "@material-ui/icons";

export const Menu = ({ titlePage, handleLogout, history }) => {
  const { menu, title, buttonIcon, drawer, drawerPaper } = useStyles();
  const [open, setOpen] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const [productosMenu, setProductosMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCategoryMenu = () => {
    setCategoriesMenu(!categoriesMenu);
  };
  const handleProductosMenu = () => {
    setProductosMenu(!productosMenu);
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

          <ListItem button onClick={handleCategoryMenu}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Categorias</ListItemText>
            <ListItemIcon>
              {categoriesMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
          <Collapse in={categoriesMenu} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
              <ListItem
                button
                onClick={() => history.push("/register-category")}
              >
                <ListItemText>Nova Categoria</ListItemText>
              </ListItem>
              <ListItem button onClick={() => history.push("/categories")}>
                <ListItemText>Listar categorias</ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </List>

        <ListItem button onClick={handleProductosMenu}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText>Produtos</ListItemText>
          <ListItemIcon>
            {productosMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        </ListItem>
        <Collapse in={productosMenu}>
          <Divider />
          <List>
            <ListItem onClick={() => history.push("/add-product")}>
              <ListItemText>Adicionar Produtos</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Listar Produtos</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </Drawer>
    </div>
  );
};
