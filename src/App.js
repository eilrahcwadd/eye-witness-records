import React, { Component } from "react";
import "./App.css";
import Toolbar from "./nav";
import SideDrawer from "./SideDrawer";
import Backdrop from "./backdrop";
import { Animated } from "react-animated-css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import About from "./About";
import Music from "./Music";
import Grid from "./Grid";
import UncontrolledLottie from "./UncontrolledLottie.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          </Animated>

          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={200}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Music" component={Music} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </Router>
        <main style={{ marginTop: "2px" }} />
      </div>
    );
  }
}

const Home = () => (
  <div class="body_animation">
    <UncontrolledLottie />

    <div class="logo_center">
      {" "}
      <Animated
        animationIn="fadeInDown"
        animationOut="zoomOutUp"
        animationInDuration={800}
        animationOutDuration={800}
        isVisible={true}
      >
        Eye Witness Records{" "}
      </Animated>
    </div>
  </div>
);
export default App;
