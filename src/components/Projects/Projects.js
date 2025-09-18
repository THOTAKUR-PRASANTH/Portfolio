import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// NOTE: Replace these image imports with your actual project images (optional)
import tagSyncImg from "../../Assets/Projects/tagsync.jpeg";
import skillswapImg from "../../Assets/Projects/skillswap.jpeg";
import hmsImg from "../../Assets/Projects/hms.jpg";
import ageCalcImg from "../../Assets/Projects/age-calculator.jpeg";
import weatherImg from "../../Assets/Projects/weather.jpeg";

function Projects() {
  const projects = [
    {
      imgPath: tagSyncImg,
      isBlog: false,
      title: "TagSync",
      description:
        "TagSync is a smart item-finding app designed for pet owners. It uses QR tag technology to help locate and manage pet-related items—like collars, toys, or accessories—by scanning and syncing tags across devices. Built with Next.js and Supabase, it offers a seamless interface for tracking, organizing, and retrieving tagged items with ease.",
      ghLink: "", 
      demoLink: "https://tag-sync.vercel.app/",
    },

    {
      imgPath: skillswapImg,
      isBlog: false,
      title: "SkillSwap",
      description:
        "SkillSwap is an AI-powered peer learning platform that connects users through skill-based exchanges. Leveraging machine learning algorithms, it intelligently matches individuals with complementary skills and learning goals. Built with the MERN stack, the platform features secure authentication, real-time chat, and a feedback system to foster trust and collaboration in a dynamic learning environment.",
      ghLink: "", 
      demoLink: "https://qrlostly.tech/",
    },

    {
      imgPath: hmsImg,
      isBlog: false,
      title: "Hospital Management System (HMS)",
      description:
        "A Hospital Management System built with Spring Boot, Thymeleaf and MySQL (admin/doctor/nurse modules). Currently the project is available on GitHub only — the repo contains the full backend and frontend (Thymeleaf) code.",
      ghLink: "https://github.com/THOTAKUR-PRASANTH/HMS_MANAGEMENT.git", // replace with your exact repo
      demoLink: "", 
    },

    {
      imgPath: ageCalcImg,
      isBlog: false,
      title: "Age Calculator",
      description:
        "A small utility app to calculate age from birthdate with a clean UI and validation. Includes features such as years/months/days breakdown and handling of edge cases (leap years, timezone).",
      ghLink: "", 
      demoLink: "https://age.prashanth.me/",
    },

    {
      imgPath: weatherImg,
      isBlog: false,
      title: "Weather App",
      description:
        "A weather application that fetches live weather data from a public API and displays current conditions, hourly forecast, and basic location search. Built with modern frontend tooling and responsive design.",
      ghLink: "", 
      demoLink: "http://weather.prashanth.me/", 
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={p.isBlog}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
