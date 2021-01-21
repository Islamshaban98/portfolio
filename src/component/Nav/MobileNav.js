import { Drawer, IconButton, MenuItem, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
];
const MobileNav = () => {
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
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "top",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    </Router>
  );
};
const getDrawerChoices = () => {
  return headersData.map(({ label, href }) => {
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
        <MenuItem>{label}</MenuItem>
      </Link>
    );
  });
};

export default MobileNav;
