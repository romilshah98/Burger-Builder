import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aus/Aus";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = ["Sidedrawer", "Close"];
  if (props.open) {
    attachedClasses = ["Sidedrawer", "Open"];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
