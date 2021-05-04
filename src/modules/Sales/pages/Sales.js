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
  ShoppingCart,
} from "@material-ui/icons";

import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getAllProducts, checkout } from "../../../service/api";
import { CounterItemsInCart } from "../../../components/Counter";
import { showMessage } from "../../../utils/messenge";

export const Sales = ({ history }) => {
  const [productsApi, setProductsApi] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [valuePrice, setValuePrice] = useState(0);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProductsApi(response.data);
    });
  }, []);

  useEffect(() => {
    uptadeTotalPrice();
  }, [productsInCart]);

  const handleAddProductsInCart = (productApi) => {
    productApi.quantity = 1;
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
  const increaseProduct = (product) => {
    const index = productsInCart.findIndex((productInCart) => {
      return productInCart.id === product.id;
    });
    productsInCart[index].quantity = product.quantity + 1;
    const productsWithoutReference = JSON.parse(JSON.stringify(productsInCart));
    setProductsInCart(productsWithoutReference);
  };

  const decreaseProduct = (product) => {
    if (product.quantity <= 1) {
      return null;
    }
    const index = productsInCart.findIndex((productInCard) => {
      return productInCard.id === product.id;
    });
    productsInCart[index].quantity = product.quantity - 1;
    const productsWithoutReference = JSON.parse(JSON.stringify(productsInCart));
    setProductsInCart(productsWithoutReference);
  };

  const uptadeTotalPrice = () => {
    let total = 0;
    productsInCart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setValuePrice(total);
  };

  const handleSendProductInCart = () => {
    checkout(productsInCart).then(() => {
      showMessage("Compra Finalizada", "Compra Efetuada Com sucesso");
      setProductsInCart([]);
    });
  };

  return (
    <Layout history={history} titlePage={"Compras"}>
      <Header
        title={"Carrinho de Compras"}
        description={
          "Aqui sera feita todo o processo de compra relacionado a um produto"
        }
        icon={<MonetizationOn fontSize={"large"} />}
        iconRight={<LocalGroceryStore fontSize={"large"} />}
        onPressIconRight={() => history.push("/list-sales")}
      />

      <Paper variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              {filterItemsInCart().length ? (
                <>
                  <TableCell> Produtos </TableCell>
                  <TableCell> Descrição </TableCell>
                  <TableCell> Preço </TableCell>
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
                  <TableCell>{productApi.description}</TableCell>
                  <TableCell>{productApi.price}</TableCell>
                  <TableCell>
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
                  <TableCell align="center"> Quantidade </TableCell>
                  <TableCell align="right"> </TableCell>
                </>
              ) : (
                <Typography align="center" variant="h6">
                  {" "}
                  Ainda não há nenhum produto no carrinho{" "}
                  {productsInCart.length}
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
                  <TableCell align="center">
                    <CounterItemsInCart
                      value={productInCard.quantity}
                      onPressIncreaseButton={() =>
                        increaseProduct(productInCard)
                      }
                      onPressDecreaseButton={() =>
                        decreaseProduct(productInCard)
                      }
                    />
                  </TableCell>

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
        {productsInCart.length ? (
          <Typography> Total: {valuePrice} </Typography>
        ) : null}
      </Box>

      <Box p={2}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            disabled={!productsInCart.length}
            onClick={() => handleSendProductInCart()}
          >
            <Typography variant="body2"> Finalizar Compra </Typography>
            <ShoppingCart fontSize={"large"} />
          </Button>
        </Grid>
      </Box>
    </Layout>
  );
};
