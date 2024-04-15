import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/heroBanner.jpg";

import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();

  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  };

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            Enveloped within the vibrant heart of Chicago, Little Lemon embodies
            the fusion of contemporary elegance with familiar warmth. Our menu,
            meticulously crafted with an array of flavors, showcases exquisite
            bruschettas, savory burgers, and invigorating Greek salads,
            underscoring our conviction that cuisine is an expression of
            artistry.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;
