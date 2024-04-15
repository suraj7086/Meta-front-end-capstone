import React from "react";
import "./About.css";
import Image from "../../../assets/restauranfood.jpg";
import ImageRestaurant from "../../../assets/restaurant.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Nestled amidst the vibrant pulse of Chicago, Petite Citrus embodies a
          perfect blend of contemporary chic and comforting familiarity. Our
          carefully curated menu, boasting an array of exquisite bruschettas,
          succulent burgers, and invigorating Greek salads, reflects our
          deep-rooted belief in the artistry of cuisine. Crafted by skilled
          chefs using locally-sourced ingredients, each dish not only tantalizes
          the taste buds but also nourishes the spirit. Whether you're in search
          of an intimate dining experience, a cozy family gathering, or a
          laid-back rendezvous with friends, Petite Citrus offers the
          quintessential culinary escapade. Discover us at the heart of Chicago,
          where unforgettable moments await.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
