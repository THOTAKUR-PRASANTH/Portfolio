import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaAward, FaStar, FaMedal } from "react-icons/fa";
import Particle from "../Particle";
import ImageModal from "../ImageModal";
import honorsDegreeCert from "../../Assets/honors-degree.jpg"; // Make sure this path is correct
import "./Education.css";

function Education() {
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleShowModal = (img) => {
    setModalImg(img);
    setModalShow(true);
  };

  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institution: "Vignan's Foundation for Science, Technology & Research",
      year: "2021 – 2025",
      percentage: "81%",
      details: (
        <>
          Graduated with an{" "}
          <strong
            className="degree-link"
            onClick={() => handleShowModal(honorsDegreeCert)}
          >
            Honors Degree in Cloud-Integrated Full-Stack Development
          </strong>
          , focusing on software design and real-world projects.
        </>
      ),
      icon: <FaGraduationCap />,
      side: "right",
      level: "branch"
    },
    {
      title: "Intermediate (MPC)",
      institution: "Krishnaveni IIT and medical academy, Khammam",
      year: "2019 – 2021",
      percentage: "90%",
      details: "Strengthened core problem-solving, analytical, and mathematical skills, laying a strong foundation for engineering studies.",
      icon: <FaBook />,
      side: "left",
      level: "stem"
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Madhu Vidyalayam, Wyra",
      year: "2018 – 2019",
      cgpa: "93%",
      details: "Built a strong foundation in academics and discipline, fostering a passion for learning.",
      icon: <FaAward />,
      side: "right",
      level: "roots"
    },
  ];

  return (
    <>
      <Container fluid className="education-section">
        <Particle />
        <Container>
          <motion.div
            className="education-header"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="education-title">
              My <span className="gradient-text">Educational Tree</span>
            </h1>
          </motion.div>

          <div className="tree-timeline">
            <div className="tree-trunk">
                {/* ... (trunk code is the same) ... */}
            </div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className={`tree-level ${edu.level} ${edu.side}`}
                /* THIS IS THE KEY CHANGE: PUSHES THE FIRST CARD DOWN */
                style={{ top: `${index * 35 + 20}%` }}
              >
                {/* ... (Rest of the card mapping code is the same) ... */}
                <motion.div className={`branch-line ${edu.side}`} initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.3 }}><div className="branch-glow"></div></motion.div>
                <motion.div className="tree-icon" initial={{ scale: 0, rotate: -360 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.3 + 0.2, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.3, rotate: 360, boxShadow: "0 0 60px rgba(168, 85, 247, 1)" }}>
                    <div className="icon-rings"><div className="ring ring-1"></div><div className="ring ring-2"></div></div>
                    <div className="icon-symbol">{edu.icon}</div>
                </motion.div>
                <motion.div className={`tree-card ${edu.side}`} initial={{ opacity: 0, x: edu.side === 'left' ? 100 : -100, scale: 0.5, rotateY: edu.side === 'left' ? -90 : 90 }} whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: index * 0.3 + 0.4, type: "spring", stiffness: 80 }} whileHover={{ scale: 1.05, y: -15, rotateY: edu.side === 'left' ? -5 : 5, boxShadow: "0 30px 80px rgba(168, 85, 247, 0.7)" }}>
                    <div className="card-background-glow"></div>
                    <div className="card-border-animate"></div>
                    <div className="year-display">{edu.year}</div>
                    <div className="card-body">
                        <h3 className="edu-heading">{edu.title}</h3>
                        <h5 className="edu-place">{edu.institution}</h5>
                        <motion.div className="score-highlight" whileHover={{ scale: 1.1 }}>
                            <FaStar className="star-icon" />
                            <span className="score-text">{edu.cgpa || edu.percentage}</span>
                            <FaStar className="star-icon" />
                        </motion.div>
                        <p className="edu-description">{edu.details}</p>
                        <div className="card-decoration">
                            <FaMedal className="deco-icon" />
                            <div className="deco-line"></div>
                            <FaMedal className="deco-icon" />
                        </div>
                    </div>
                    <div className="sparkles"><div className="sparkle sparkle-1"></div><div className="sparkle sparkle-2"></div><div className="sparkle sparkle-3"></div></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Container>
      <ImageModal show={modalShow} onHide={() => setModalShow(false)} imgSrc={modalImg} />
    </>
  );
}

export default Education;