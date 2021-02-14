import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    gridDiv: {
      marginTop: "10%",
      [theme.breakpoints.down("xs")]: {
        marginTop: "10%",
      },
    },
    imgDiv: {
      position: "relative",
      margin: "0 auto",
    },
    img: {
      position: "absolute",
      top: "-94%",
      left: "-35px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
      letterSpacing: "0.18538em",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    Typography: {
      paddingTop: "35px",
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "19px",
      width: "85%",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        width: "auto",
      },
    },
  };
});

const AboutSkills = (props) => {
  const { skillsImg, title, parag } = props;
  const classes = useStyles();
  return (
    <div className={classes.gridDiv}>
      <div className={classes.imgDiv}>
        <img src={skillsImg} alt="" className={classes.img} />
        <Typography className={classes.title}>{title}</Typography>
      </div>
      <Typography className={classes.Typography}>{parag}</Typography>
    </div>
  );
};

export default AboutSkills;
