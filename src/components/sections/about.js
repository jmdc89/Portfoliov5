import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Three.js",
    "Styled Components",
    "Rhinoceros 3D",
    "Grasshopper",
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Jose Manuel Dominguez. My interest in web
              development started in 2020 after 8 years of professional
              experience coding generative algorithms to control and produce
              complex geometry.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at{" "}
              <a href="https://www.faac.unesp.br/#!/cadep/">
                Center for Advanced Product Development
              </a>
              , and{" "}
              <a href="https://sagradafamilia.org/es/">
                the Sagrada Familia Temple
              </a>
              . My main focus these days is combine my knowledge on parametric
              modeling and digital fabrication with the creation of innovative
              digital solutions through web development.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage src="../../images/me.PNG" alt="me" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
