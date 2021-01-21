import React from "react";
import { Email, LinkedIn, gitHup } from "../../img/index";
import useStyles from "./icons.style";

const DesktopIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.desktopIcons}>
      <a href="https://islamshaban998@gmail.com">
        <img src={Email} alt="" />
      </a>
      <a href="https://github.com/Islamshaban98">
        <img src={gitHup} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/islam-shaban-b5082b189/">
        <img src={LinkedIn} alt="" />
      </a>
    </div>
  );
};

export default DesktopIcons;
