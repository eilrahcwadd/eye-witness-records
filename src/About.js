import React from "react";
import "./App.css";
import Toolbar from "./nav";
import SideDrawer from "./SideDrawer";
import Backdrop from "./backdrop";

function About() {
  return (
    <div>
      <div class="wrapper">
        <header class="header">
          <h1> About </h1>
        </header>
      </div>
      <div class="main">
        <div class="about-paragraph">
          Established in 2012, we are a record label based in Nashville +
          Bloomington. We collaborate with musicians to release their records on
          vinyl + tape casette. Follow us on twitter or bandcamp to keep up with
          us!
        </div>
      </div>
    </div>
  );
}

export default About;
