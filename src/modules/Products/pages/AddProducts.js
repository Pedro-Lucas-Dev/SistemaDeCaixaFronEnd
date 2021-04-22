import { FormControl, InputLabel, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { categories } from "../../../service/api";

export const AddProducts = ({ history }) => {
  const [ListCategory, setListCategory] = useState([]);
  const [selectProduct, setSelectProduct] = useState({
    id: "DEFAULT",
  });
  useEffect(() => {
    categories().then((response) => {
      setListCategory(response.data);
    });
  }, []);
  const handleSelectCategoryChange = (e) => {
    setSelectProduct({ id: e.target.value });
  };
  return (
    <Layout history={history} titlePage="Produto">
      <Header
        description={"Essa é a nossa tela para cadastrar um novo produto"}
        title={"Tela de Cadastro"}
      />
      <FormControl>
        <InputLabel>Categorias</InputLabel>
        <Select onChange={handleSelectCategoryChange}>
          <option selected={"DEFAULT" === selectProduct.id} value="DEFAULT">
            Selecione uma opção
          </option>
          {ListCategory.map((category) => {
            return (
              <option
                selected={category.id === selectProduct.id}
                value={category.id}
                key={category.id}
              >
                {category.name}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Layout>
  );
};
