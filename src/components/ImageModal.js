// src/components/ImageModal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageModal.css";

function ImageModal({ show, onHide, imgSrc }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="image-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onHide}
        >
          <motion.div
            className="image-modal-content"
            initial={{ scale: 0.5, y: "-100vh" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.5, y: "100vh" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <button className="close-modal-btn" onClick={onHide}>&times;</button>
            <img 
              src={imgSrc} 
              alt="Degree Certificate" 
              className="modal-image" 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;