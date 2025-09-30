import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tagSyncImg from "../../Assets/Projects/tagsync.jpeg";
import skillswapImg from "../../Assets/Projects/skillswap.jpeg";
import hmsImg from "../../Assets/Projects/hms.jpg";
import ageCalcImg from "../../Assets/Projects/age-calculator.jpeg";
import notesImg from "../../Assets/Projects/notes.jpeg";
import apiImg from "../../Assets/Projects/api.png";

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
      ghLink: "https://github.com/THOTAKUR-PRASANTH/HMS_MANAGEMENT.git",
      demoLink: "",
    },
    {
      imgPath: notesImg,
      isBlog: false,
      title: "Notes App",
      description:
        "A sleek, responsive Notes App built with Next.js and Tailwind CSS to streamline daily class note sharing with students. Designed for clarity and accessibility, it features Python-friendly fonts, subtle animations, and a modular structure for easy content updates. Ideal for educators and learners alike, the app reflects a modern UI approach and thoughtful UX design.",
      ghLink: "https://github.com/THOTAKUR-PRASANTH/notes",
      demoLink: "https://notes-orpin-five.vercel.app/",
    },
    {
      imgPath: apiImg,
      isBlog: false,
      title: "SkillMatch AI API",
      description:
        "SkillMatch AI is an intelligent API that connects learners and mentors by analyzing skill similarity with NLP (spaCy). Clients can add users with their skills-to-teach and skills-to-learn, then query the API to get matched users with a calculated match score. Built with Flask and MongoDB Atlas, and deployed on Render. Try it now with sample input at: https://skillmatchai-jw02.onrender.com/match",
      ghLink: "https://github.com/THOTAKUR-PRASANTH/SkillMatchAi.git",
      demoLink: "https://skillmatchai-jw02.onrender.com/",
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
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

        <Row className="justify-content-center g-4">
          {projects.map((p, idx) => (
            <Col md={4} className="d-flex" key={idx}>
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
