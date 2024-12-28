import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Ali </span>
            from <span className="purple"> Islamabad Pakistan.</span>
            <br />
            I am currently a Software Engineering student at FAST NUCES Islamabad.
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#00b3cc5d" }}>
            "Try ,try till you succeed!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
