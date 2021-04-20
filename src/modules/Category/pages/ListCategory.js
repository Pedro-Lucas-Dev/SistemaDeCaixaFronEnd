import React, { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { categories } from "../../../service/api";
import { Header } from "../../../components/Header";
import { DataGrid } from "@material-ui/data-grid";
import { Menu } from "@material-ui/icons";

// TODO
// Aplicat Loading
// Configurar DataGrid
// Criar funcao para redirecionar para tela de cadastro
// Adicionar Icone de Trash ao lado de cada item no DataGrid
// Ao ser pressionado o icone da lixeira deve apagar o registro

export const ListCategory = ({ history }) => {
  const [categoryData, setCategoryData] = useState([]);
  const columns = [
    {
      field: "name",
      headerName: "name",
      width: 130,
    },
  ];
  useEffect(() => {
    categories().then((response) => {
      setCategoryData(response.data);
    });
  }, []);
  return (
    <Layout history={history} titlePage={"Categoria"}>
      <Header
        title={"Lista de Categorias:"}
        description={"aqui são encontradas todas as categorias cadastradas"}
        icon={<Menu fontSize={"large"} />}
      />
      <div>
        {categoryData.length ? (
          <DataGrid
            rows={categoryData}
            columns={columns}
            pageSize={20}
            autoHeight
          />
        ) : null}
      </div>
    </Layout>
  );
};
