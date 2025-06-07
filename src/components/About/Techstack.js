import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiMongodb,
  DiMysql,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiHibernate } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg"; // Use C++ icon as a substitute for C

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* Using C++ icon for C */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
      </Col>
    </Row>
  );
}

export default Techstack;
