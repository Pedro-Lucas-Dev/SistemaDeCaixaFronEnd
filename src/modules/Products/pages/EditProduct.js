import { Button, Grid, TextField } from "@material-ui/core";
import { Create, Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getProductById, uptadeProductService } from "../../../service/api";
import { showMessage, errorMessage } from "../../../utils/messenge";

export const EditProduct = ({ history, match }) => {
  const [ProductData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    image_url: "",
  });

  useEffect(() => {
    getProductById(match.params.id).then((response) => {
      setProductData(response.data);
    });
  }, [match]);

  const handleUptadeProductData = (id, value) => {
    setProductData({ ...ProductData, [id]: value });
  };

  const handleSendProductData = () => {
    uptadeProductService(match.params.id, ProductData)
      .then(() => {
        showMessage("Deu certo!!!", "Produto alterado com sucesso");
        history.push("/list-products");
      })
      .catch(() => {
        errorMessage("Ocorreu um error", "Verifique todos os dados");
      });
  };

  console.log(ProductData);
  return (
    <Layout titlePage={"Editar o Produto"} history={history}>
      <Header
        title={"Edição de produto"}
        description={"Aqui é onde o produto sera alterado"}
        icon={<Create fontSize={"large"} />}
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
          value={ProductData.name}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="description"
          value={ProductData.description}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="price"
          value={ProductData.price}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="image_url"
          value={ProductData.image_url}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSendProductData()}
        >
          {" "}
          Salvar{" "}
        </Button>
      </Grid>
    </Layout>
  );
};
