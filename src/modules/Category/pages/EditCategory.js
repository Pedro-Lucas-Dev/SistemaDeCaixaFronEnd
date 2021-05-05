import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { getCategoryById, updateCategoryService } from "../../../service/api";
import { Edit, Home } from "@material-ui/icons";

export const EditCategory = ({ history, match }) => {
  const [newDataCategory, setNewDataCategory] = useState("");

  useEffect(() => {
    getCategoryById(match.params.id).then((response) => {
      setNewDataCategory(response.data.name);
    });
  }, [match]);

  const handlePatchtCategory = (id) => {
    updateCategoryService(id, newDataCategory).then(() => {
      history.push("/categories");
    });
  };

  return (
    <Layout titlePage="Edição da categoria" history={history}>
      <Header
        title={"editar categoria"}
        icon={<Edit fontSize="large" />}
        iconRight={<Home fontSize="large" />}
        onPressIconRight={() => history.push("/main")}
      />
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={1}
      >
        <Typography variant="h4"> Formulario </Typography>
        <TextField
          ariant="outlined"
          margin="normal"
          variant="outlined"
          required={true}
          width={50}
          id="editCategory"
          onChange={(e) => setNewDataCategory(e.target.value)}
          value={newDataCategory}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePatchtCategory(match.params.id)}
        >
          {" "}
          Editar{" "}
        </Button>
      </Grid>
    </Layout>
  );
};
