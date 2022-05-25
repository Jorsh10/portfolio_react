import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>BIENVENIDOS</h1>
      <p>Jorge Eduardo| Jessica Vera | Estudiantes del ITT2 | Docente: Daniel Olivares </p>
    </div>
  );
};

export default Cover;