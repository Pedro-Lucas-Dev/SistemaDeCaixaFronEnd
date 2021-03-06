import React from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import useStyles from "./styles";

export const Header = ({
  description,
  icon,
  title,
  iconRight,
  onPressIconRight,
}) => {
  const { box } = useStyles();
  return (
    <Grid container>
      <Grid
        container
        className={box}
        direction="row"
        alignItems="center"
        justify={iconRight ? "space-between" : null}
      >
        {icon}
        <Grid>
          <Typography variant="h4">{title.toUpperCase()}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Grid>
        {iconRight ? (
          <IconButton onClick={onPressIconRight}>{iconRight}</IconButton>
        ) : null}
      </Grid>
    </Grid>
  );
};
