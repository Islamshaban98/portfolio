import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import SkillDiv from "./SkillDiv";
import useStyles from "./skills.style";
import {
  bootstrap,
  figma,
  git,
  html,
  javaScript,
  react,
  sass,
  css,
  node,
  mysql,
  ts,
  mdp,
  cplus,
  jerman,
  C,
  us,
} from "../../img/index";
const Skills = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.skillTitle}>USING NOW:</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={html} title="HTML5" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv
            img={javaScript}
            title="JavaScript"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={sass} title="Sass" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={css} title="Css" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={git} title="Git" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={figma} title="Figma" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={react} title="React" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv
            img={bootstrap}
            title="Bootstrap"
            className={classes.paper}
          />
        </Grid>
      </Grid>
      <Typography className={classes.skillTitle}>LEARNING:</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={node} title="NODEJS" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={mysql} title="MySQL" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={mdp} title="MONGODB" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={ts} title="TYPESCRIPT" className={classes.paper} />
        </Grid>
      </Grid>
      <Typography className={classes.skillTitle}>OTHER SKILLS:</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv
            img={us}
            title="ANGIELSKI C1/C2"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv
            img={jerman}
            title="HISZPAŃSKI
B1/B2"
            className={classes.paper}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={cplus} title="C++" className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <SkillDiv img={C} title="C" className={classes.paper} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
