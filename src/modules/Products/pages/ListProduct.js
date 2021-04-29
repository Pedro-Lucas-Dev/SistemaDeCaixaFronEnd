import {
  Button,
  IconButton,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  Typography,
  CardContent,
  Box,
  Divider,
} from "@material-ui/core";
import {
  Menu,
  AddCircle,
  Delete,
  Create,
  FiberManualRecord,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Empty } from "../../../components/Empty";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import {
  getAllProducts,
  deleteProductService,
  changeProductStatusService,
} from "../../../service/api";
import { green } from "@material-ui/core/colors";
import { useStyles } from "./style";

export const ListProduct = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const { root, media } = useStyles();

  useEffect(() => {
    refresh();
  }, []);

  const handleDeleteProduct = (id) => {
    deleteProductService(id).then(() => {
      refresh();
    });
  };

  const refresh = () => {
    getAllProducts().then((response) => {
      setProducts(response.data);
      setProductsFiltered(response.data);
    });
  };

  const handleChangedColor = (id, status) => {
    changeProductStatusService(id, status).then(() => {
      refresh();
    });
  };

  const applyFilter = (status) => {
    if (status) {
      const productsInactive = products.filter((product) => {
        return product.status === status;
      });
      setProductsFiltered(productsInactive);
      return;
    }
    return setProductsFiltered(products);
  };

  return (
    <Layout history={history} titlePage={"Lista de Produtos"}>
      <Header
        title={"Lista Dos Produtos"}
        description={"Essa é a nossa pagina de exibição dos produtos"}
        icon={<Menu fontSize={"large"} />}
        iconRight={<AddCircle fontSize={"large"} />}
        onPressIconRight={() => history.push("/add-product")}
      />
      <Box mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => applyFilter("ACTIVE")}
        >
          Exibir Ativos
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => applyFilter("INACTIVE")}
        >
          Exibir Inativos
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => applyFilter()}
        >
          Exibir Todos
        </Button>
      </Box>
      <Box display="flex">
        {productsFiltered.length ? (
          productsFiltered.map((product) => {
            return (
              <Card key={product.id} className={root}>
                <CardHeader
                  title={product.name}
                  subheader={
                    product.category_id?.name
                      ? product.category_id.name
                      : "Não informado"
                  }
                />
                <Divider />
                <CardMedia className={media} image={product.image_url} />
                <Divider />
                <CardContent>
                  <Typography variant="body1">{product.description}</Typography>

                  <Typography variant="h4" align="right">
                    {" "}
                    {product.price}{" "}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                  <IconButton onClick={() => handleDeleteProduct(product.id)}>
                    <Delete color="error" />
                  </IconButton>

                  <IconButton
                    onClick={() => history.push(`/edit-product/${product.id}`)}
                  >
                    <Create color="primary" />
                  </IconButton>

                  <IconButton
                    onClick={() =>
                      handleChangedColor(product.id, product.status)
                    }
                  >
                    {product.status === "active".toUpperCase() ? (
                      <FiberManualRecord style={{ color: green[500] }} />
                    ) : (
                      <FiberManualRecord color="secondary" />
                    )}
                  </IconButton>
                </CardActions>
              </Card>
            );
          })
        ) : (
          <Empty message={"Ainda Não foram Cadastrado nenhum produto"} />
        )}
      </Box>
    </Layout>
  );
};
