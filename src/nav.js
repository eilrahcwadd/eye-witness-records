import React from "react";
import "./nav.css";
import DrawerToggleButton from "./DrawerToggleButton.js";
import { Link } from "react-router-dom";
import UncontrolledLottie from "./UncontrolledLottie.js";
const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar__toggle-button">
        {" "}
        <DrawerToggleButton click={props.drawerClickHandler} />{" "}
      </div>
      <div className="logo">
        <UncontrolledLottie />
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <Link to="/">
            <li>
              <h3>Home</h3>
            </li>
          </Link>
          <Link to="/About">
            <li>
              <h3>About</h3>
            </li>
          </Link>
          <Link to="/Music">
            <li>
              <h3>Music</h3>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
