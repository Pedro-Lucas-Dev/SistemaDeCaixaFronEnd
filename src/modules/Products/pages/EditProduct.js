import { Button, Grid, TextField } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Layout } from "../../../components/Layout";
import { getProductById, uptadeProductService } from "../../../service/api";

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
    uptadeProductService(match.params.id, ProductData);
  };

  console.log(ProductData);
  return (
    <Layout titlePage={"Editar o Produto"} history={history}>
      <Header
        title={"Edição de produto"}
        description={"Aqui é onde o produto sera alterado"}
        iconRight={<Menu fontSize={"large"} />}
        onPressIconRight={() => history.push("/list-products")}
      />

      <Grid>
        <TextField
          ariant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="name"
          value={ProductData.name}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          ariant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="description"
          value={ProductData.description}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          ariant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="price"
          value={ProductData.price}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
        <TextField
          ariant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="image_url"
          value={ProductData.image_url}
          onChange={(e) => handleUptadeProductData(e.target.id, e.target.value)}
        />
      </Grid>
      <Grid>
        <Button onClick={() => handleSendProductData()}> Editar </Button>
      </Grid>
    </Layout>
  );
};
