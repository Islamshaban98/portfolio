import React, { useState, useEffect } from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { AppBar } from "@material-ui/core";
import useStyles from "./Nav.style";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <AppBar
      className={classes.root}
      elevation={trigger}
      style={{
        backgroundColor: trigger ? "#000" : "transparent",
        paddingTop: trigger ? "1%" : "3%",
        paddingRight: trigger ? "1%" : "3%",
      }}
    >
      {mobileView ? <MobileNav /> : <DesktopNav />}
    </AppBar>
  );
};

export default Nav;
