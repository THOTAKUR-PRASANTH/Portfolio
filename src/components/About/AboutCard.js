import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prashanth Chowdari </span>
            from <span className="purple"> Telangana, India.</span>
            <br /> <br />
            I am a recent B.Tech graduate with an offer from Tata Consultancy Services (TCS) for the role of System Engineer.
            <br /> <br />
           While preparing to join TCS, I am actively engaged in a real-time ERP (Enterprise Resource Planning) project under my college's IT team. 
           This hands-on experience involves working on software solutions tailored for university operations, such as student management, 
           admissions, attendance, and staff coordination.
            <br /> <br />
            Through this project, I am enhancing my skills in full-stack development, collaborating with a technical team, 
            and contributing to software that directly impacts administrative efficiency at the institutional level. 
            This opportunity is helping me bridge the gap between academic knowledge and real-world application, 
            making me industry-ready even before my formal onboarding.
            <br /><br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prashanth Chowdari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
