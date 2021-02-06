import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  skillTitle: {
    letterSpacing: "0.18538em",
    color: "#000",
    fontWeight: "bold",
    paddingTop: "50px",
    paddingBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    alignSelf: "center",
  },
}));
export default useStyles;
