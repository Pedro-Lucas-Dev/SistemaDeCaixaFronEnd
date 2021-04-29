import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 225,
  },
  root: {
    width: "250px",
    marginLeft: 16,
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
}));
