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
        <img src={mailFilled} alt="" className={classes.icon} />
        <img src={linkedFilled} alt="" className={classes.icon} />
        <img src={githupFilled} alt="" className={classes.icon} />
      </div>
    </div>
  );
};

export default MobileIcons;
