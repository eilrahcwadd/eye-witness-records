import React from "react";
import "./App.css";
import MusicCard from "./card";

function Music() {
  return (
    <div class="body">
      <div class="wrapper-music">
        <header class="header">
          <h1> Music</h1>
        </header>
        <div class="main music">
          <MusicCard />
        </div>
      </div>
    </div>
  );
}

export default Music;
