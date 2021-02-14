import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import SkillDiv from "./SkillDiv";
import useStyles from "./skills.style";
import * as data from "./SkillsData";
const Skills = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.skillTitle}>USING NOW:</Typography>
      <Grid container spacing={3}>
        {data.usingNow.map(({ title, img }) => {
          return (
            <Grid item xs={12} md={3} sm={6}>
              <SkillDiv img={img} title={title} className={classes.paper} />
            </Grid>
          );
        })}
      </Grid>
      <Typography className={`${classes.skillTitle} ${classes.lastGrid}`}>
        LEARNING:
      </Typography>
      <Grid container spacing={3} className={classes.lastGrid}>
        {data.learning.map(({ title, img }) => {
          return (
            <Grid item xs={12} md={3} sm={6}>
              <SkillDiv img={img} title={title} className={classes.paper} />
            </Grid>
          );
        })}
      </Grid>
      <Typography className={`${classes.skillTitle} ${classes.lastGrid}`}>
        OTHER SKILLS:
      </Typography>
      <Grid container spacing={3} className={classes.lastGrid}>
        {data.otherSkills.map(({ title, img }) => {
          return (
            <Grid item xs={12} md={3} sm={6}>
              <SkillDiv img={img} title={title} className={classes.paper} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Skills;
