import React, { useEffect, useState } from "react";
import { loggedUser } from "../../../service/api";

const Main = ({ history }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    loggedUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("@SuaAplicacao:JWT_TOKEN");
    history.push("/");
  };

  return (
    <div>
      <h3>Bem vindo {user.name}</h3>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default Main;
