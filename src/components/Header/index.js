import React from "react";
import { Typography, Box, Grid, IconButton } from "@material-ui/core";

export const Header = ({
  description,
  icon,
  title,
  iconRight,
  onPressIconRight,
}) => {
  return (
    <Box p={2}>
      <Grid direction="row" container>
        {icon}
        <Grid>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Grid>
        {iconRight ? (
          <IconButton onClick={onPressIconRight}>{iconRight}</IconButton>
        ) : null}
      </Grid>
    </Box>
  );
};
