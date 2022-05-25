import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Nosotros somos</h3>
        <p>
       Estudiantes del ITT2 y realizamos un portafolio con la finalidad  de conocer  React el cual nos permite ser una librería open source de JavaScript para desarrollo de  interfaces de usuario , a continuacion se mostraran algunos proyectos implementados por este framework.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  )
}

export default About