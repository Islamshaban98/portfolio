import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    AboutMeDiv: {
      paddingTop: "10%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    TabButton: {
      paddingLeft: "5%",
      paddingRight: "5%",
      paddingTop: "1%",
      paddingBottom: "1%",
    },
    subtitle1: {
      width: "70%",
      textAlign: "center",
      paddingTop: "3%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        paddingTop: "5%",
      },
    },
    devGrid: {
      [theme.breakpoints.down("md")]: {
        paddingLeft: "0px",
      },
      paddingLeft: "15px",
    },
    borderButton: {
      marginTop: "3%",
      paddingLeft: "27px",
      paddingRight: "27px",
    },
    separator: {
      marginTop: "5%",
      [theme.breakpoints.down("xs")]: {
        paddingTop: "10%",
      },
    },
    rootGrid: {
      paddingTop: "10%",
      paddingBottom: "10%",
      paddingLeft: "13%",
      paddingRight: "13%",
    },
    lastGrid: {
      margin: `${theme.spacing(1)}px auto`,
    },
  };
});
export default useStyles;
