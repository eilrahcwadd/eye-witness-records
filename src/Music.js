import React from "react";
import "./App.css";
import MusicCard from "./card";

function Music() {
  return (
    <div>
      <div class="wrapper">
        <header class="header">
          <h1> Music</h1>
        </header>
        <div class="main">
          <MusicCard />
        </div>
      </div>
    </div>
  );
}

export default Music;
