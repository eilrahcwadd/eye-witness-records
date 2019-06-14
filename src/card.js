import React from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import Alison from "./alison.jpg";
import Emil from "./Emil.jpg";
import Aloha from "./aloha.jpg";
import Home from "./home.jpg";

export default function MusicCard() {
  return (
    <>
      <Card>
        <Card.Img variant="bottom" src={Alison} />
        <Card.Body>
          <Card.Text>
            <h3> A.L.I.S.O.N </h3>
            <h2> Space Station </h2>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src={Emil} />
        <Card.Body>
          <Card.Text>
            <h3> Emil Rottmayer </h3>
            <h2> Descend </h2>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Img variant="bottom" src={Aloha} />
        <Card.Body>
          <Card.Text>
            <h3> VANTAGE </h3>
            <h2> Aloha Island </h2>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card>
        <Card.Img variant="bottom" src={Home} />
        <Card.Body>
          <Card.Text>
            <h3> HOME </h3>
            <h2> Odyssey</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
