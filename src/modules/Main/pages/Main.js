import React, { useState, useEffect } from "react";
import { Layout } from "../../../components/layout/Layout";
import { loggedUser } from "../../../service/api";

const Main = ({ history }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    loggedUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Layout history={history} titlePage={`Bem vindo ${user.name}`}>
      <div>
        <p>teste</p>
      </div>
    </Layout>
  );
};
export default Main;
