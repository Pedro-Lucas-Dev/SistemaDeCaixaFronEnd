import React, { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { loggedUser } from "../../../service/api";
import { Home } from "@material-ui/icons";

const Main = ({ history }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    loggedUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Layout history={history} titlePage={"Home"}>
      <Header
        icon={<Home fontSize={"large"} />}
        title={`Bem vindo, ${user.name}`}
        description={"Olha como está nossa aplicação hoje"}
      />
    </Layout>
  );
};
export default Main;
