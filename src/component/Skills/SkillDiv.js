import { Typography } from "@material-ui/core";
import React from "react";

const SkillDiv = (props) => {
  const { title, img } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="" />
      <Typography variant="caption" component="h2">
        {title}
      </Typography>
    </div>
  );
};

export default SkillDiv;
