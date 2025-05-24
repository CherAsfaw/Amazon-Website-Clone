import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/Data";
import classes from './carousel.module.css'

function HeroCarousel() {
  return (
    <div className={classes.container}>
      <ReactCarousel autoPlay infiniteLoop showIndicators showThumbs={false}>
        {img.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </ReactCarousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default HeroCarousel;
