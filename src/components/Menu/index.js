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
  AllInboxSharp,
  Storefront,
  AccountCircle,
} from "@material-ui/icons";

export const Menu = ({ titlePage, handleLogout, history }) => {
  const { menu, title, buttonIcon, drawer, drawerPaper } = useStyles();
  const [open, setOpen] = useState(false);
  const [categoriesMenu, setCategoriesMenu] = useState(false);
  const [productosMenu, setProductosMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

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

  const handleOpenUserMenu = () => {
    setUserMenu(!userMenu);
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
          {localStorage.getItem("name")}
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
              <AllInboxSharp />
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
                <ListItemText>Cadastrar Categoria</ListItemText>
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

        <Collapse in={productosMenu} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button onClick={() => history.push("/add-product")}>
              <ListItemText>Cadastrar Produtos</ListItemText>
            </ListItem>
            <ListItem button onClick={() => history.push("/list-products")}>
              <ListItemText>Listar Produtos</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => handleOpenUserMenu()}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText>Usuario </ListItemText>
          <ListItemIcon>
            {userMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        </ListItem>
        <Collapse in={userMenu}>
          <List>
            <ListItem button onClick={() => history.push("/user-data")}>
              <ListItemText> Meus Dados </ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => history.push("/edit-user-informations")}
            >
              <ListItemText> Editar Dados </ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </Drawer>
    </div>
  );
};
