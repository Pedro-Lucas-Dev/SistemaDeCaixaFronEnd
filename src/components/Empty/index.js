import { Grid, Typography } from "@material-ui/core";
import { SentimentVeryDissatisfied } from "@material-ui/icons";
import React from "react";

export const Empty = ({ message = "Não Há Registros", icon }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {icon ? icon : <SentimentVeryDissatisfied fontSize="large" />}
      <Typography variant="h5"> {message} </Typography>
    </Grid>
  );
};
