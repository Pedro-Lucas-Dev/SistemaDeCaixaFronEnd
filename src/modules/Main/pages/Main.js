import React, { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getQuantites, loggedUser } from "../../../service/api";
import {
  Home,
  AllInboxSharp,
  Storefront,
  ShoppingBasket,
  AccountCircle,
} from "@material-ui/icons";
import { InformationBox } from "../../../components/InformationBox";
import { Box } from "@material-ui/core";
const Main = ({ history }) => {
  const [user, setUser] = useState({});
  const [systemData, setSystemData] = useState({
    categories: 0,
    products: 0,
    sales: 0,
    users: 0,
  });
  useEffect(() => {
    getQuantites().then((response) => {
      setSystemData(response);
    });
    loggedUser().then((response) => {
      setUser(response.data);
      localStorage.setItem("name", response.data.name);
    });
  }, []);

  return (
    <Layout history={history} titlePage={"Home"}>
      <Header
        icon={<Home fontSize={"large"} />}
        title={`Bem vindo, ${user.name}`}
        description={"Olha como está nossa aplicação hoje"}
      />
      <Box display={"flex"}>
        <InformationBox
          title={"Produtos"}
          quantity={systemData.products}
          color={"red"}
          icon={<Storefront fontSize={"large"} />}
        />
        <InformationBox
          title={"Categoria"}
          quantity={systemData.categories}
          color={"primary"}
          icon={<AllInboxSharp fontSize={"large"} />}
        />
        <InformationBox
          title={"Vendas"}
          quantity={systemData.sales}
          color={"primary"}
          icon={<ShoppingBasket fontSize={"large"} />}
        />
        <InformationBox
          title={"Usuarios"}
          quantity={systemData.users}
          color={"primary"}
          icon={<AccountCircle fontSize={"large"} />}
        />
      </Box>
    </Layout>
  );
};
export default Main;
