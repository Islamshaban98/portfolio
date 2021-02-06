import { Button, Tab, Tabs } from "@material-ui/core";
import React from "react";
import useStyles from "./Nav.style";
import { logo } from "../../img/index";
import theme from "../../theme";
import "./style.css";

const DesktopNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.tabsDiv}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor={theme.palette.secondary.main}
        >
          <Tab label="About me" className={classes.tabsFont} />
          <Tab label="Skills" className={classes.tabsFont} />
          <Tab label="Portfolio" className={classes.tabsFont} />
        </Tabs>
        <Button className={classes.contactBtn} variant="contained">
          CONTACT ME
        </Button>
      </div>
    </>
  );
};

export default DesktopNav;
