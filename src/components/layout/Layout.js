import React from "react";
import { Menu } from "./Menu";
import { Box } from "@material-ui/core";

export const Layout = ({ children, history, titlePage }) => {
  const handleLogout = () => {
    localStorage.removeItem("@SuaAplicacao:JWT_TOKEN");
    history.push("/");
  };
  return (
    <div>
      <Menu titlePage={titlePage} handleLogout={handleLogout} />
      <Box mt={8}> {children} </Box>
    </div>
  );
};
