import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { person } from "../../img/index";
import useStyles from "./Header.style";
import Nav from "../Nav/Nav";
import Icons from "../socialIcons/Icon";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Nav />
      <Grid container className={classes.rowDiv}>
        <Grid item sm={12} md={6}>
          <div className={classes.heading}>
            <Typography variant="h4" component="h2" className={classes.title}>
              Hi, I am
            </Typography>
            <Typography variant="h3" component="h2" className={classes.name}>
              Tomasz Gajda
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              className={classes.txt}
            >
              Front-end Developer / UI Designer
            </Typography>
          </div>
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
