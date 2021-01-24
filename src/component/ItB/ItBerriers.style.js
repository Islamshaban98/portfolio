import { makeStyles } from "@material-ui/core/styles";
import { ITBerries } from "../../img/index";

const useStyles = makeStyles((theme) => ({
  Tbackground: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "5%",
    paddingRight: "20px",
    backgroundColor: "#1D1D1D",
    height: "350px",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${ITBerries})`,
      height: "500px",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      textAlign: "center",
      paddingLeft: "20px",
    },
  },
  LogoDiv: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  txt: {
    paddingTop: "5%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15%",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "3%",
      fontSize: "20px",
    },
  },
  parag: {
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
      fontSize: "14px",
    },
  },
  button: {
    borderLeft: "2px solid #fff",
    borderRight: "2px solid #fff",
    borderRadius: "0px",
    marginTop: "20px",
  },
  itlogo: {
    width: "124%",
    position: "relative",
    top: " -154px",
    height: "168%",
    left: "-19px",
    "@media (max-width:1400px)": {
      left: "-3px",
    },
    "@media (max-width:1024px)": {
      left: " -8px",
      width: "123%",
      height: "122%",
      top: "-74px",
    },
  },
}));
export default useStyles;
