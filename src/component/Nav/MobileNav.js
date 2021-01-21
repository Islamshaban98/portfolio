import {
  AppBar,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { BrowserRouter as Router, Link } from "react-router-dom";
import useStyles from "./Nav.style";
import { whiteLogo } from "../../img";

const headersData = [
  {
    label: "About Me",
    href: "/About",
  },
  {
    label: "Skills",
    href: "/Skills",
  },
  {
    label: "Portfolio",
    href: "/Portfolio",
  },
  {
    label: "Contact Us",
    herf: "/contact",
  },
];
const MobileNav = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    drawerOpen: false,
  });
  const { drawerOpen } = state;
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  return (
    <Router>
      <Toolbar>
        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          classes={{ paper: classes.paper }}
        >
          <AppBar className={classes.topBar}>
            <div className={classes.whiteLogo}>
              <img src={whiteLogo} alt="" />
            </div>
            <IconButton
              {...{
                edge: "end",
                color: "inherit",
                onClick: handleDrawerClose,
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </AppBar>
          <div className={classes.drawerChoices}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    </Router>
  );
};
const getDrawerChoices = () => {
  return headersData.map(({ label, href }) => {
    const classes = useStyles();
    return (
      <Link
        {...{
          component: Link,
          to: href,
          color: "transparent",
          style: { textDecoration: "none" },
          key: label,
        }}
      >
        <div className={classes.last}>
          <MenuItem classes={{ gutters: classes.gutters }}>{label}</MenuItem>
        </div>
      </Link>
    );
  });
};

export default MobileNav;
