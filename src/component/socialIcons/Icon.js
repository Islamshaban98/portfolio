import React, { useState, useEffect } from "react";
import DesktopIcons from "./DesktopIcons";
import MobileIcons from "./MobileIcons";

const Icons = () => {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return <div>{mobileView ? <MobileIcons /> : <DesktopIcons />}</div>;
};

export default Icons;
