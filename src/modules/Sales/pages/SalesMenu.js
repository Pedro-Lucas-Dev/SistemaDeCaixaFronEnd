import {
  Grid,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Paper,
  TableBody,
} from "@material-ui/core";
import {
  AddShoppingCart,
  LocalGroceryStore,
  MonetizationOn,
  RemoveShoppingCart,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getAllProducts } from "../../../service/api";

export const Sales = ({ history }) => {
  const [productsApi, setProductsApi] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProductsApi(response.data);
    });
  }, []);

  const handleAddProductsInCart = (productApi) => {
    productsInCart.push(productApi);
    const productsWithoutReference = JSON.parse(JSON.stringify(productsInCart));
    setProductsInCart(productsWithoutReference);
  };
  const idProductsInCart = productsInCart.map((productInCart) => {
    return productInCart.id;
  });

  const filterItemsInCart = () => {
    if (!idProductsInCart.length) return productsApi;
    return productsApi.filter((productApi) => {
      return !idProductsInCart.includes(productApi.id);
    });
  };

  const handleRemoveCartItem = (productInCard) => {
    const index = productsInCart.indexOf((product) => {
      return product.id === productInCard.id;
    });
    productsInCart.splice(index, 1);
    const productsWithoutReference = JSON.parse(JSON.stringify(productsInCart));
    setProductsInCart(productsWithoutReference);
  };

  return (
    <Layout history={history} titlePage={"Compras"}>
      <Header
        title={"Bem vindo a tela de compras"}
        description={
          "Aqui sera feita todo o processo de compra relacionado a um produto"
        }
        icon={<MonetizationOn fontSize={"large"} />}
        iconRight={<LocalGroceryStore fontSize={"large"} />}
      />

      <Paper variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              {filterItemsInCart().length ? (
                <>
                  <TableCell> Produtos </TableCell>
                  <TableCell align="right"> Descrição </TableCell>
                  <TableCell align="right"> Preço </TableCell>
                  <TableCell align="right"> </TableCell>
                </>
              ) : (
                <Typography align="center" variant="h6">
                  {" "}
                  Você já adicionou todos os produtos{" "}
                </Typography>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterItemsInCart().map((productApi) => {
              return (
                <TableRow key={productApi._id}>
                  <TableCell>{productApi.name}</TableCell>
                  <TableCell align="right">{productApi.description}</TableCell>
                  <TableCell align="right">{productApi.price}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddProductsInCart(productApi)}
                    >
                      {" "}
                      <AddShoppingCart />{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Box p={2} />

      <Paper variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              {productsInCart.length ? (
                <>
                  <TableCell> Produtos </TableCell>
                  <TableCell align="right"> Descrição </TableCell>
                  <TableCell align="right"> Preço </TableCell>
                  <TableCell align="right"> </TableCell>
                </>
              ) : (
                <Typography align="center" variant="h6">
                  {" "}
                  Ainda não há nenhum produto no carrinho{productsInCart.length}
                </Typography>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {productsInCart.map((productInCard) => {
              return (
                <TableRow key={productInCard._id}>
                  <TableCell>{productInCard.name}</TableCell>
                  <TableCell align="right">
                    {productInCard.description}
                  </TableCell>
                  <TableCell align="right">{productInCard.price}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveCartItem(productInCard)}
                    >
                      {" "}
                      <RemoveShoppingCart />{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>

      <Box p={2}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Button variant="contained" color="primary">
            <Typography variant="body2">
              {" "}
              Adicionar item ao carrinho{" "}
            </Typography>
            <AddShoppingCart fontSize={"large"} />
          </Button>
        </Grid>
      </Box>
      <Box>
        {productsInCart.length ? <Typography> Total: </Typography> : null}
      </Box>
    </Layout>
  );
};
