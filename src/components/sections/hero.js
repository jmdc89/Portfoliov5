import React, { useState } from "react";
import styled from "styled-components";
import { email } from "../../config";

const Hero = () => {
  const one = <h1>Hi. my name is</h1>;
  const two = <h2 className="big-heading">Jose M. Dominguez</h2>;
  const three = (
    <h3 className="big-heading">First I drink coffee, then I build things.</h3>
  );
  const four = (
    <p>
      I'm a Spain-based architect and software developer with 10 years of
      professional experience in digital fabrication, parametric modeling and
      complex geometry. Currently, I´m focused on designing and building
      exceptional digital experiences.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  return (
    <>
      <h1>hello form hero</h1>
      <h2>bye from hero</h2>
    </>
  );
};

export default Hero;
