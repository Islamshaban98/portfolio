import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    border: "5px solid #000",
    borderRadius: "0px",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "0.35538em",
  },
}));
const TabButton = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Button color="primary" className={`${className} , ${classes.button}`}>
      {text}
    </Button>
  );
};

export default TabButton;
