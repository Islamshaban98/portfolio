import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Typo.style";

const Typog = () => {
  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        className={classes.title}
      >
        Hi, I am
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        className={classes.name}
      >
        Tomasz Gajda
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        gutterBottom
        className={classes.txt}
      >
        Front-end Developer / UI Designer
      </Typography>
    </div>
  );
};

export default Typog;
