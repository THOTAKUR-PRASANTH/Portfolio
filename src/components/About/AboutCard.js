import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Prashanth Chowdari</span> from
            <span className="purple"> Telangana, India.</span>
            <br /> <br />
            I’m currently working as a <span className="purple">System Engineer at Tata Consultancy Services (TCS)</span>,
            where I contribute to building and maintaining scalable enterprise-level applications.
            <br /> <br />
            Alongside my professional role, I’m also a passionate 
            <span className="purple"> freelance full-stack developer</span>, 
            helping clients and startups build reliable and modern web applications using
            <span className="purple"> Spring Boot</span> and the <span className="purple">MERN stack</span>.
            <br /> <br />
            I enjoy translating real-world problems into clean, efficient code and creating
            digital solutions that truly make an impact. 
            I’m always open to collaborating on meaningful projects — whether it’s for innovation,
            learning, or community contribution.
            <br /> <br />
            You can explore my freelance work and connect with me on Fiverr here:{" "}
            <a
              href="https://www.fiverr.com/prashanth_312/develop-full-stack-web-apps-using-mern-and-spring-boot"
              target="_blank"
              rel="noreferrer"
              className="purple"
            >
              Fiverr Profile
            </a>
            .
            <br /> <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(Pubg)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion. Build with purpose. Deliver with impact."
          </p>
          <footer className="blockquote-footer">Prashanth Chowdari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
