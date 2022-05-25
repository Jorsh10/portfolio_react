import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
      src:
        "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
      alt: "Projecto 1",
      desc: "Reconocimiento de Objetos",
      
    },
    {
      src:
        "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
      alt: "Projecto 2",
      desc: "Projecto 2",
    },
   
  ];
  
  const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </div>
  ));
  
  export default slides;