import React from "react";
import { Grid } from "@material-ui/core";
import { person } from "../../img/index";
import useStyles from "./Header.style";
import Nav from "../Nav/Nav";
import Icons from "../socialIcons/Icon";
import Typography from "../Typography/Typography";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Nav />
      <Grid container className={classes.rowDiv}>
        <Grid item sm={12} md={6}>
          <Typography />
          <Icons />
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={person} alt="" className={classes.personImg} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
