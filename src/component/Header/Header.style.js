import { makeStyles } from "@material-ui/core/styles";
import { white_Black, background } from "../../img/index";

const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingBottom: "5%",
      [theme.breakpoints.down("sm")]: {
        // fontSize: "20px",
      },
    },
    rowDiv: {
      paddingLeft: "10%",
      paddingRight: "10%",
      paddingTop: "5%",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        position: "relative",
        top: "20%",
      },
    },
    txt: {
      color: "#919191",
    },
    heroSection: {
      [theme.breakpoints.down("sm")]: {
        backgroundImage: `url(${background})`,
        height: "771px",
      },
      backgroundImage: `url(${white_Black})`,
      height: "inherit",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    personImg: {
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
        visibility: "hidden",
      },
    },
    socialIcons: {
      marginTop: "10%",
      width: "20%",
      display: "flex",
      flexDirection: "row",
      justifyContent: " space-between",
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
  };
});

export default useStyles;
