import React, { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { categories } from "../../../service/api";
import { Header } from "../../../components/Header";
import { Menu, AddCircle, Delete, Create } from "@material-ui/icons";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import { useStyles } from "./style";
import { deleteCategoryService } from "../../../service/api";

export const ListCategory = ({ history }) => {
  const [categoryData, setCategoryData] = useState([]);

  const { actions } = useStyles();

  useEffect(() => {
    refresh();
  }, []);

  const handleDeleteCategoryClick = (id) => {
    deleteCategoryService(id).then(() => {
      refresh();
    });
  };
  const handleEditCategoryClick = (id) => {
    history.push(`/edit-category/${id}`);
  };
  const refresh = () => {
    categories().then((response) => {
      setCategoryData(response.data);
    });
  };
  return (
    <Layout history={history} titlePage={"Categoria"}>
      <Header
        title={"Lista de Categorias:"}
        description={"aqui são encontradas todas as categorias cadastradas"}
        icon={<Menu fontSize={"large"} />}
        iconRight={<AddCircle />}
        onPressIconRight={() => history.push("/register-category")}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>categorias</TableCell>
              <TableCell align="right" className={actions}>
                {" "}
                Ações{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryData.map((data) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{data.name}</TableCell>
                  <TableCell align="right" className={actions}>
                    <IconButton
                      onClick={() => handleDeleteCategoryClick(data.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right" className={actions}>
                    <IconButton
                      onClick={() => handleEditCategoryClick(data.id)}
                    >
                      <Create />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};
