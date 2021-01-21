import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingBottom: "5%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        color: "#fff",
      },
    },
    txt: {
      color: "#919191",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        color: "#fff",
      },
    },
    heading: {
      width: "fit-content",
      marginTop: "10%",
      [theme.breakpoints.down("sm")]: {
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
      },
    },
    name: {
      [theme.breakpoints.down("sm")]: {
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "30px",
      },
    },
  };
});

export default useStyles;
