import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maksym Bukharinov </span>
            from <span className="purple"> Lviv, Ukraine.</span>
            <br />
            I am currently unemployed and studying at Lviv Polytechnic National University.
            <br />
            Even though I'm in the process of getting my degree, my skills already allow me to create simple projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing & Designing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Arts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
