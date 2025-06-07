import { useState, useEffect, useRef } from "react";
import Particle from "../Particle";
import '../Certifications/Certifications.css';

import TCS_CodeVita_Season_11 from "../../Assets/Certificates/TCS CodeVita Season 11 Certificate - prasanth_chowdari.jpeg";
import TCS_Codevita_Season_12 from "../../Assets/Certificates/TCS Codevita Season 12 Global Rank Holder.jpg";
import E_Business from "../../Assets/Certificates/E-Business.jpeg";
import Cyber_Security_and_Privacy from "../../Assets/Certificates/Cyber Security and Privacy.jpeg";
import Internship_Certificate from "../../Assets/Certificates/Internship Certificate.jpeg";
import Computer_Vision from "../../Assets/Certificates/Computer Vision.jpeg";
import Introduction_To_Internet_Of_Things from "../../Assets/Certificates/Introduction To Internet Of Things.jpeg";
import Problem_Solving_Through_Programming_In_C from "../../Assets/Certificates/Problem Solving Through Programming In C.jpeg";
import Principles_of_Management from "../../Assets/Certificates/Principles of Management.jpeg";
import oracle_certification from "../../Assets/Certificates/Oracle_Certificate.jpeg";


const certificatesData = [
  { id: 1, title: "TCS CodeVita Season 11 Certificate 2024", img: TCS_CodeVita_Season_11 },
  { id: 2, title: "TCS Codevita Season 12 Global Rank Holder 2025", img: TCS_Codevita_Season_12 },
  { id : 3, title: " Oracle Cloud Infrastructure 2024 Generative AI Certified Professional", img: oracle_certification },
  { id: 4, title: "Internship Certificate", img: Internship_Certificate },
    { id: 5, title: "Problem Solving Through Programming In C", img: Problem_Solving_Through_Programming_In_C },
     { id: 6, title: "Cyber Security and Privacy", img: Cyber_Security_and_Privacy },
  { id: 7, title: "E-Business", img: E_Business },
  { id: 8, title: "Computer Vision", img: Computer_Vision },
  { id: 9, title: "Introduction To Internet Of Things", img: Introduction_To_Internet_Of_Things },
  { id: 10, title: "Principles of Management", img: Principles_of_Management },
  
];

function Certification() {
  const [modalCert, setModalCert] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = modalCert ? "hidden" : "auto";
  }, [modalCert]);

  return (
    <section className="certification-section">
      <Particle />
      <h2 className="certification-title">🎓 My Certifications</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => setModalCert(cert)}
            className="certificate-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="certificate-image"
            />
            <h3 className="certificate-title">{cert.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalCert && (
        <div
          className="modal-overlay"
          onClick={() => setModalCert(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button
              onClick={() => setModalCert(null)}
              className="modal-close"
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="modal-title">{modalCert.title}</h3>
            <img
              src={modalCert.img}
              alt={modalCert.title}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certification;

