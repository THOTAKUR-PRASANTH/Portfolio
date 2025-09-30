import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  const [readMore, setReadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const shortDescription = description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <>
      <Card className="project-card-view h-100 d-flex flex-column shadow-sm">
        {/* Image clickable to open modal */}
        <div
          style={{ cursor: "pointer", overflow: "hidden" }}
          onClick={() => setShowModal(true)}
        >
          <Card.Img
            variant="top"
            src={imgPath}
            alt="card-img"
            style={{
              height: "250px",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
            {readMore ? description : shortDescription}
            {description.length > 120 && (
              <span
                onClick={() => setReadMore(!readMore)}
                style={{ color: "#6f42c1", cursor: "pointer", fontWeight: "bold", marginLeft: "5px" }}
              >
                {readMore ? " Show Less" : " Read More"}
              </span>
            )}
          </Card.Text>
          <div className="mt-auto d-flex flex-wrap">
            {ghLink && (
              <Button variant="primary" href={ghLink} target="_blank" className="me-2 mb-2 flex-grow-1">
                <BsGithub /> &nbsp; {isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!isBlog && demoLink && (
              <Button variant="success" href={demoLink} target="_blank" className="mb-2 flex-grow-1">
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Image Modal */}
      {showModal && (
        <div
          className="image-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%",
              animation: "zoomIn 0.3s",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          >
            <img
              src={imgPath}
              alt="modal-img"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              }}
            />
            <AiOutlineClose
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white",
                fontSize: "2rem",
                cursor: "pointer",
                background: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
              }}
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
      `}</style>
    </>
  );
}

export default ProjectCards;
