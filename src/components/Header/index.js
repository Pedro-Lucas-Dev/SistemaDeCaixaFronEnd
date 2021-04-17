import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";

export const Header = ({ description, icon, title }) => {
  return (
    <Box p={2}>
      <Grid direction="row" container>
        {icon}
        <Grid>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
