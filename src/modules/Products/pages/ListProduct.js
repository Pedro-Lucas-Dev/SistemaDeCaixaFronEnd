import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
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

export const ListProduct = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
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
      </Grid>
      {productsFiltered.length ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> imagem </TableCell>
              <TableCell> Produto </TableCell>
              <TableCell> Preço </TableCell>
              <TableCell> Descrição </TableCell>
              <TableCell> Categoria </TableCell>
              <TableCell> Ações </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsFiltered.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>
                    {" "}
                    <img
                      src={product.image_url}
                      height="42"
                      width="42"
                      alt=""
                    />{" "}
                  </TableCell>

                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    {" "}
                    {product.category_id?.name
                      ? product.category_id.name
                      : "Não informado"}{" "}
                  </TableCell>
                  <TableCell width={50}>
                    <IconButton onClick={() => handleDeleteProduct(product.id)}>
                      <Delete color="error" />
                    </IconButton>
                  </TableCell>
                  <TableCell width={50}>
                    <IconButton
                      onClick={() =>
                        history.push(`/edit-product/${product.id}`)
                      }
                    >
                      <Create color="primary" />
                    </IconButton>
                  </TableCell>

                  <TableCell width={50}>
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
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <Empty message={"Ainda Não foram Cadastrado nenhum produto"} />
      )}
    </Layout>
  );
};
