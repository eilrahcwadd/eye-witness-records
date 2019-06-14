import React, { Component } from "react";
import "./App.css";
import Toolbar from "./nav";
import SideDrawer from "./SideDrawer";
import Backdrop from "./backdrop";
import About from "./About";
import Music from "./Music";
import Grid from "./Grid";
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
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Music" component={Music} />
          </Switch>

          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </Router>
        <main style={{ marginTop: "20px" }} />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <Grid />
  </div>
);

export default App;
