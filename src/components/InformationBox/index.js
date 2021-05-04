import { Box, Typography } from "@material-ui/core";
import React from "react";

export const InformationBox = ({
  color = "red",
  title,
  icon,
  quantity = 0,
}) => {
  return (
    <Box
      p={2}
      boxShadow={2}
      display="flex"
      bgcolor={color}
      width={150}
      alignItems={"flex-end"}
      justifyContent={"space-between"}
      mx={1}
    >
      {icon}
      <Typography variant={"body1"}> {title} </Typography>
      <Typography variant={"h5"}> {quantity} </Typography>
    </Box>
  );
};
