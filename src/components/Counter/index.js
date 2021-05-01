import { Box, Button } from "@material-ui/core";
import React from "react";

export const CounterItemsInCart = ({
  value = 0,
  onPressIncreaseButton,
  onPressDecreaseButton,
}) => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => onPressIncreaseButton()}
      >
        +
      </Button>

      <Box p={1}>{value}</Box>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onPressDecreaseButton()}
      >
        {" "}
        -{" "}
      </Button>
    </Box>
  );
};
