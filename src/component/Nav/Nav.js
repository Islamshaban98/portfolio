import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import useStyles from "./Nav.style";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Nav = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      show
        ? setNavBackground("appBarSolid")
        : setNavBackground("appBarTransparent");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      className={`${classes.root} ${classes[navRef.current]}`}
      style={{
        justifyContent: mobileView ? "flex-end" : null,
      }}
    >
      {mobileView ? <MobileNav /> : <DesktopNav />}
    </AppBar>
  );
};

export default Nav;
