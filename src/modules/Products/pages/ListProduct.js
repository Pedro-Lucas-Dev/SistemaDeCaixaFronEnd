import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Menu, AddCircle, Delete, Create } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getAllProducts } from "../../../service/api";

export const ListProduct = ({ history }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout history={history} titlePage={"Lista de Produtos"}>
      <Header
        title={"Lista Dos Produtos"}
        description={"Essa é a nossa pagina de exibição dos produtos"}
        icon={<Menu fontSize={"large"} />}
        iconRight={<AddCircle fontSize={"large"} />}
        onPressIconRight={() => history.push("/add-product")}
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> Img </TableCell>
            <TableCell> Produto </TableCell>
            <TableCell> Preço </TableCell>
            <TableCell> Descrição </TableCell>
            <TableCell> Categoria </TableCell>
            <TableCell> Ações </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
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
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell width={50}>
                  <IconButton>
                    <Create />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Layout>
  );
};
