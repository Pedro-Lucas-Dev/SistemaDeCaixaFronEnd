import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  Button,
} from "@material-ui/core";
import { ShoppingBasket, AddCircle, Cancel } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getListSales, changeStatusSale } from "../../../service/api";
import { showMessage } from "../../../utils/messenge";

export const ListSales = ({ history }) => {
  const [sales, setSales] = useState([]);
  const [productsInSale, setProductsInSale] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const STATUS_PAID = "Pago";
  const STATUS_WAIT_FOR_PAYMENT = "Pedente";

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    getListSales().then((response) => {
      setSales(response.data);
    });
  };
  const handleChangeStatus = (id, status) => {
    changeStatusSale(id, status).then(() => {
      showMessage("feito", "Status da Compra atualizado");
      refresh();
    });
  };
  const handleProductInSale = (products) => {
    setProductsInSale(products);
    setIsVisible(true);
  };
  const handleClearProductsInSale = () => {
    setIsVisible(false);
    setProductsInSale([]);
  };

  return (
    <Layout history={history}>
      <Header
        title={"List de Compras"}
        icon={<ShoppingBasket fontSize={"large"} />}
        iconRight={<AddCircle fontSize={"large"} />}
        onPressIconRight={() => history.push("/sales")}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Produtos comprados </TableCell>
              <TableCell> Status </TableCell>
              <TableCell> Data </TableCell>
              <TableCell> Preço </TableCell>
              <TableCell> Ação </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((sale) => {
              const dateSale = new Date(sale.saleDate);
              return (
                <TableRow
                  key={sale._id}
                  style={{
                    backgroundColor:
                      sale.status === STATUS_PAID ? "#d9fcd9" : "#f29d9d",
                  }}
                >
                  <TableCell> {sale.products.length} </TableCell>
                  <TableCell> {sale.status} </TableCell>
                  <TableCell> {dateSale.toLocaleString()} </TableCell>
                  <TableCell> {sale.total} </TableCell>

                  <TableCell>
                    {" "}
                    <Button
                      onClick={() => handleChangeStatus(sale._id, STATUS_PAID)}
                      variant="contained"
                      color="primary"
                    >
                      {" "}
                      Pago{" "}
                    </Button>{" "}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      onClick={() =>
                        handleChangeStatus(sale._id, STATUS_WAIT_FOR_PAYMENT)
                      }
                      variant="contained"
                      color="secondary"
                    >
                      {" "}
                      Pedente{" "}
                    </Button>{" "}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      onClick={() => handleProductInSale(sale.products)}
                    >
                      {" "}
                      Produtos{" "}
                    </Button>{" "}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      {isVisible ? (
        <>
          <Button
            onClick={() => handleClearProductsInSale()}
            variant="contained"
            color="secondary"
          >
            {" "}
            <Cancel />
          </Button>
          <div>
            <table>
              <tr>
                <td>Nome Dos Produtos </td>
                <td>Quantidade </td>
              </tr>
              {productsInSale.map(({ name, quantity }) => {
                return (
                  <tr>
                    <td> {name} </td>
                    <td> {quantity} </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      ) : null}
    </Layout>
  );
};
