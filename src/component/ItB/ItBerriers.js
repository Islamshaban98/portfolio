import { Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./ItBerriers.style";
import { LogoIT } from "../../img/index";

const ItBerriers = () => {
  const classes = useStyles();
  return (
    <div className={classes.Tbackground}>
      <div className={classes.txt}>
        <Typography variant="h4" component="h2" className={classes.title}>
          IT BERRIES
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.parag}
        >
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.{" "}
        </Typography>
        <Button color="secondary" className={classes.button}>
          Secondary
        </Button>
      </div>
      <div className={classes.LogoDiv}>
        <img src={LogoIT} alt="" className={classes.logo} />
      </div>
    </div>
  );
};

export default ItBerriers;
