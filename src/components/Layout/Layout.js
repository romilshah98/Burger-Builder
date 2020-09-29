import React from "react";
import Aux from "../../hoc/Aus";
import './Layout.css';
const layout = (props) => (
  <Aux>
    <div>Toolbar, slidebar, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;