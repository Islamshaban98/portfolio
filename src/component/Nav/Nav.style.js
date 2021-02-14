import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      height: "fit-content",
      width: "100%",
      paddingTop: "3%",
      justifyContent: "space-between",
      top: "0",
      boxShadow: "none",
    },
    contactBtn: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      borderRadius: "30px",
      marginLeft: "13px",
      fontSize: "12px",
      fontWeight: "bold",
    },
    tabsDiv: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "flex-end",
      [theme.breakpoints.up("md")]: {
        marginRight: "2%",
      },
    },
    logo: {
      paddingLeft: "10%",
    },
    topBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "20px",
      paddingRight: "20px",
      borderBottom: "1px solid #fff",
    },
    whiteLogo: {
      paddingTop: "10px",
    },
    drawerChoices: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      marginTop: "59px",
      textAlign: "center",
    },
    paper: {
      backgroundColor: "transparent",
    },
    gutters: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      padding: "10px",
      "&.MuiListItem-button:hover": { backgroundColor: "#fff", color: "#000" },
    },
    tabsFont: {
      fontWeight: "bold",
    },
    appBarTransparent: {
      backgroundColor: "transparent",
      paddingTop: "3%",
      paddingRight: "3%",
    },
    appBarSolid: {
      backgroundColor: "#000",
      paddingTop: "1%",
      paddingBottom: "0.5%",
    },
  };
});

export default useStyles;
