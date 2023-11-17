import React from "react";
import Image from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            natus omnis harum expedita, architecto molestiae. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Itaque odio animi maiores
            officia aliquid iusto ratione illo eius fugiat at.
          </p>
        </div>
        <div className="img-container">
          <img src={Image} alt="woman and browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
