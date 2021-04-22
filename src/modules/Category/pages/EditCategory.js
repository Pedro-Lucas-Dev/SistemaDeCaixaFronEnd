import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import { getCategoryById, updateCategoryService } from "../../../service/api";

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
      <Grid>
        <TextField
          ariant="outlined"
          margin="normal"
          required={true}
          width={50}
          id="editCategory"
          onChange={(e) => setNewDataCategory(e.target.value)}
          value={newDataCategory}
        />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePatchtCategory(match.params.id)}
        >
          {" "}
          Editar{" "}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/categories")}
        >
          {" "}
          Cancela{" "}
        </Button>
      </Grid>
    </Layout>
  );
};
