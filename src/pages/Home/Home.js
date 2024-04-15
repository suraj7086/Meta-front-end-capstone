import React, { Fragment } from "react";
import Hero from "../Sections/Hero/Hero";
import Specials from "../Sections/Specials/Specials";
import Testimonials from "../Sections/Testimonials/Testimonials";
import About from "../Sections/About/About";

export default function Home (){
  return (
    <Fragment>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </Fragment>
  );
};
