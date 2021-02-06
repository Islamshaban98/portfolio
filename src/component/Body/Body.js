import { makeStyles } from "@material-ui/core";
import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

const useStyles = makeStyles(() => {
  return {
    bodyDiv: {
      background:
        "radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #FFFFFF",
    },
  };
});
const Body = () => {
  const classes = useStyles();
  return (
    <div className={classes.bodyDiv}>
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Body;
