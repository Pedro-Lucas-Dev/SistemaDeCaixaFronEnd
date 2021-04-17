import React from "react";

import { Box, Container } from "@material-ui/core";
import { Menu } from "../Menu";

export const Layout = ({ children, history, titlePage }) => {
  const handleLogout = () => {
    localStorage.removeItem("@SuaAplicacao:JWT_TOKEN");
    history.push("/");
  };
  return (
    <div>
      <Menu titlePage={titlePage} handleLogout={handleLogout} />
      <Container>
        <Box mt={8}> {children} </Box>
      </Container>
    </div>
  );
};
