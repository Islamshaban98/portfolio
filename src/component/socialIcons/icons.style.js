import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    desktopIcons: {
      marginTop: "10%",
      width: "20%",
      display: "flex",
      flexDirection: "row",
      justifyContent: " space-between",
    },
    mobileIcons: {
      marginTop: "10%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    socialIcons: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      margin: "10px",
    },
  };
});

export default useStyles;
