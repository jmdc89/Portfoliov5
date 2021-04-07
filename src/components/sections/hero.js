import React, { useState } from "react";
import styled from "styled-components";
import { email } from "../../config";

const StyledHeroSection = styled.section`
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    /* font-family: var(--font-mono); */
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 500px;
    color: var(light-slate);
  }
  .email-link {
    margin-top: 50px;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    /* font-family: var(--font-mono); */
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHeroSection>
        <h1>Hi. my name is</h1>
        <h2 className="big-heading">Jose M. Dominguez</h2>
        <h3 className="big-heading">
          First I drink coffee, then I build things.
        </h3>
        <p>
          I'm a Spain-based architect and software developer with 10 years of
          professional experience in digital fabrication, parametric modeling
          and complex geometry. Currently, I´m focused on designing and building
          exceptional digital experiences.
        </p>
        <a href={`mailto:${email}`} className="email-link">
          Get In Touch
        </a>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
