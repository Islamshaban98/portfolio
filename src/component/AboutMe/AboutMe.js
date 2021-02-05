import { Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  Design,
  Development,
  Maintenance,
  separatorBlack,
} from "../../img/index";
import AboutSkills from "../AboutSkills/AboutSkills";
import NborderButton from "../NborderButton";
import TabButton from "../TabButton";
import useStyles from "./AboutMe.style";

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.AboutMeDiv}>
      <TabButton text="ABOUT ME" className={classes.TabButton} />
      <Typography
        variant="subtitle1"
        component="h2"
        className={classes.subtitle1}
      >
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </Typography>
      <NborderButton text="EXPLORE" className={classes.borderButton} />
      <div className={classes.separator}>
        <img src={separatorBlack} alt="" />
      </div>
      <Grid
        container
        classes={{
          root: classes.rootGrid,
        }}
      >
        <Grid item md={6} sm={12}>
          <AboutSkills
            title="Design"
            skillsImg={Design}
            parag="I can design the website based on your needs and suggestions. 
            I can also create it from scratch by consulting with you during work.
     "
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <AboutSkills
            title="Development"
            skillsImg={Development}
            parag="I can design the website based on your needs and suggestions. 
            I can also create it from scratch by consulting with you during work.
            "
          />
        </Grid>
        <Grid item sm={12} md={6} className={classes.lastGrid}>
          <AboutSkills
            title="Maintenance"
            skillsImg={Maintenance}
            parag="I can design the website based on your needs and suggestions. 
            I can also create it from scratch by consulting with you during work.
          "
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
