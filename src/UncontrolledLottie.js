// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./Eye.json";
import { Animated } from "react-animated-css";

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Animated
          animationIn="fadeInLeftBig"
          animationInDuration={1400}
          animationOut="fadeOutUp"
          isVisible={true}
        >
          <Lottie options={defaultOptions} width={500} />
        </Animated>
      </div>
    );
  }
}

export default UncontrolledLottie;
