import React from "react";
import { Email, LinkedIn, gitHup } from "../../img/index";
import useStyles from "./icons.style";

const DesktopIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.desktopIcons}>
      <img src={Email} alt="" />
      <img src={gitHup} alt="" />
      <img src={LinkedIn} alt="" />
    </div>
  );
};

export default DesktopIcons;
