import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

import "./Toolbar.css";

const toolBar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
