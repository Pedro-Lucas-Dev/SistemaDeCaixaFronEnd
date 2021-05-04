import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { Menu, ShoppingCart } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { categories, postNewProduct } from "../../../service/api";
import { showMessage } from "../../../utils/messenge";
import { useStyles } from "./style";

export const AddProducts = ({ history }) => {
  const [ListCategory, setListCategory] = useState([]);
  const [selectProduct, setSelectProduct] = useState({
    id: "DEFAULT",
  });

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const { formControl } = useStyles();

  useEffect(() => {
    categories().then((response) => {
      setListCategory(response.data);
    });
  }, []);

  const handleSelectCategoryChange = (e) => {
    setSelectProduct({ id: e.target.value });
  };

  const handleDataProduct = (id, value) => {
    setProduct({ ...product, [id]: value });
  };

  const handleSendProductData = () => {
    postNewProduct(product, selectProduct).then(() => {
      showMessage("Ação feita!", "Produto Cadastrado com sucesso");
    });
  };

  return (
    <Layout history={history} titlePage="Produto">
      <Header
        description={"Essa é a nossa tela para cadastrar um novo produto"}
        title={"formulário de cadastro"}
        icon={<ShoppingCart fontSize={"large"} />}
        iconRight={<Menu fontSize={"large"} />}
        onPressIconRight={() => history.push("/list-products")}
      />
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="name"
          label="Nome do produto"
          onChange={(e) => handleDataProduct(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="description"
          label="Descrição"
          onChange={(e) => handleDataProduct(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="price"
          label="Preço do produto"
          onChange={(e) => handleDataProduct(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="image"
          label="Imagem"
          onChange={(e) => handleDataProduct(e.target.id, e.target.value)}
        />

        <FormControl variant="filled" className={formControl}>
          <InputLabel>Categorias</InputLabel>
          <Select onChange={handleSelectCategoryChange} variant="outlined">
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
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendProductData}
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};
