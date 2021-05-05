import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getUserById } from "../../service/api";
import md5 from "crypto-js/md5";
import { ChevronLeft } from "@material-ui/icons";

export const UserDataMenu = ({ handleDrawerClose }) => {
  const [user, setUser] = useState({
    email: "",
  });

  const fullNameUser = localStorage.getItem("name");

  useEffect(() => {
    getUserById().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Box py={3} bgcolor="#90caf9">
      <IconButton onClick={() => handleDrawerClose()}>
        <ChevronLeft fontSise="small" />
      </IconButton>
      <Box direction="column" display="flex">
        <img
          src={`https://www.gravatar.com/avatar/${md5(user.email)}?d=robohash`}
          width={50}
        />
        <Box>
          <Typography variant="body1">{fullNameUser}</Typography>
          <Typography style={{ fontSize: 9 }}>{user.email}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
