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
      position: "sticky",
      top: "0",
      boxShadow: "none",
    },
    contactBtn: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      borderRadius: "30px",
      width: "auto",
      fontSize: "14px",
    },
    tabsDiv: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "flex-end",
      [theme.breakpoints.up("lg")]: {
        marginRight: "10%",
      },
    },
    logo: {
      paddingLeft: "10%",
    },
  };
});

export default useStyles;
