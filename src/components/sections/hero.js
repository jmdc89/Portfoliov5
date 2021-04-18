import React from "react";
import styled from "styled-components";
import { email } from "../../config";

const StyledHeroSection = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  /* padding: 0; */

  @media (max-width: 900px) {
    /* padding-bottom: 10vh; */
    /* max-width: 90vw; */
    margin-left: 10vw;
    /* max-height: 100vh; */
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
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: clamp(40px, 8vw, 60px);
  }
  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
    margin: 0;
    margin-bottom: 30px;
    font-size: clamp(40px, 7vw, 50px);
  }
  p {
    margin: 20px 0 0;
    max-width: 700px;
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
        <h2>Jose Cascajosa.</h2>
        {/* <h3 className="big-heading">
          I am basically a pretty good autodidact.
        </h3> */}
        <p>
          I'm a Spain-based architect and software developer with 10 years of
          experience in digital fabrication, parametric modeling and complex
          geometry. Currently, I´m focused on designing and building exceptional
          digital experiences.
        </p>
        <a href={`mailto:${email}`} className="email-link">
          Get In Touch
        </a>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
