import {
  Paper,
  Table,
  Button,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React from "react";

export const ListProductsBuy = ({
  productsInSale,
  handleClearProductsInSale,
}) => {
  return (
    <Paper>
      <Button
        onClick={() => handleClearProductsInSale()}
        variant="contained"
        color="secondary"
      >
        {" "}
        <Cancel />
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome Dos Produtos </TableCell>
            <TableCell>Quantidade </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsInSale.map(({ name, quantity }) => {
            return (
              <TableRow>
                <TableCell> {name} </TableCell>
                <TableCell> {quantity} </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
