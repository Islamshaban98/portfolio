import React from "react";
import {
  mailFilled,
  linkedFilled,
  githupFilled,
  separatorWhite,
} from "../../img/index";
import useStyles from "./icons.style";

const MobileIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.mobileIcons}>
      <div>
        <img src={separatorWhite} alt="" />
      </div>
      <div className={classes.socialIcons}>
        <a href="https://islamshaban998@gmail.com">
          <img src={mailFilled} alt="" className={classes.icon} />
        </a>
        <a href="https://github.com/Islamshaban98">
          <img src={linkedFilled} alt="" className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/islam-shaban-b5082b189/">
          <img src={githupFilled} alt="" className={classes.icon} />
        </a>
      </div>
    </div>
  );
};

export default MobileIcons;
