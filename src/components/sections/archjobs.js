import React from "react";
import styled from "styled-components";
import { Icon } from "../icons";
import { StaticImage } from "gatsby-plugin-image";
import { Link as GatsbyLink } from "gatsby";

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media (max-width: 768px) {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  }
  &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }
  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;
      @media (max-width: 768px) {
        justify-content: flex-start;
      }
      li {
        margin: 0 0 5px 20px;
        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }
  .project-overline {
    margin: 10px 0;
    color: var(--green);
    /* font-family: var(--font-mono); */
    font-size: var(--fz-xs);
    font-weight: 400;
  }
  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    @media (max-width: 768px) {
      color: var(--white);
      a {
        position: static;
        &:before {
          content: "";
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .project-description {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      cursor: pointer;
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
  }
  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;
    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      /* font-family: var(--font-mono); */
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      margin: 10px 0;
      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .project-image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      height: 400px;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;

const NumberedHeading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  margin-bottom: 40px;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  /* white-space: nowrap; */
  margin-left: 10px;

  &:before {
    position: relative;
    bottom: 4px;
    /* counter-increment: section; */
    content: "03.";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-lg), 10vw, var(--fz-xl));
    font-weight: 400;

    @media (max-width: 480px) {
      margin-bottom: -3px;
      margin-right: 5px;
      max-width: 80vw;
    }
  }
`;

const StyledButton = styled.a`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  font-size: var(--fz-xs);
  line-height: 1;
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
  margin-left: 15px;
  font-size: var(--fz-xs);
`;

const Archjob = () => {
  return (
    <section id="projects">
      <NumberedHeading>Architecture projects</NumberedHeading>
      {/* <StyledProjecstGrid> */}
      <StyledProject>
        <div className="project-content">
          <div>
            <h3 className="project-title">
              <a>Bamboo Structures</a>
            </h3>
          </div>

          <div className="project-description">
            <p>
              During my stay in Brazil and Mexico had the opportunity to work
              with this incredible material, experimenting with different
              constructive and design solutions.
            </p>

            <ul className="project-tech-list">
              <li>Rhinoceros3D</li>
              <li>Grasshopper</li>
              <li>SAP 2000</li>
            </ul>
          </div>

          <div className="project-links">
            {/* <StyledButton
              className="resume-button"
              href="https://pinnacle3d.netlify.app/"
              target="_blank"
            >
              3d model
            </StyledButton> */}
            <StyledButton
              className="resume-button"
              href="{resume}"
              target="_blank"
            >
              <GatsbyLink to="/bamboogallery">Images</GatsbyLink>
            </StyledButton>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/bamboo/img01.Spiral-structure.jpg"
              alt="Image 1"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <h3 className="project-title">
              <a>The Wu Project</a>
            </h3>
          </div>

          <div className="project-description">
            <p>
              “Wu” is the result of an immersive experience based on the
              perspective of who interacts with it. Thus, it remains unfinished,
              unfolding through its own processes. Composed by an audiovisual
              intervention submersed throughout a geodesic structure, its
              dynamics converges, connects and reverberates all inner and outer
              influences.
            </p>

            <ul className="project-tech-list">
              <li>Rhinoceros3D</li>
              <li>Grasshopper</li>
              <li>Laser Cut</li>
              <li>Arduino</li>
            </ul>
          </div>

          <div className="project-links">
            {/* <StyledButton
              className="resume-button"
              href="https://pinnacle3d.netlify.app/"
              target="_blank"
            >
              3d model
            </StyledButton> */}
            <StyledButton
              className="resume-button"
              href="{resume}"
              target="_blank"
            >
              <GatsbyLink to="/wugallery">Images</GatsbyLink>
            </StyledButton>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/ProjetoWu/img01.Projeto-Wu.jpg"
              alt="Projeto Wu"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <h3 className="project-title">
              <a>Casacor 2019</a>
            </h3>
          </div>

          <div className="project-description">
            <p>
              In this collaboration with the architecture studio "Daniela
              Conalghi" for the Casacor design event held in Sao Paulo, we made
              an organic surface that fuses walls and ceiling through generative
              design and digital manufacturing (CNC).
            </p>

            <ul className="project-tech-list">
              <li>Rhinoceros3D</li>
              <li>Grasshopper</li>
              <li>CNC</li>
            </ul>
          </div>

          <div className="project-links">
            {/* <StyledButton
              className="resume-button"
              href="https://pinnacle3d.netlify.app/"
              target="_blank"
            >
              3d model
            </StyledButton> */}
            <StyledButton className="resume-button" target="_blank">
              <GatsbyLink to="/casacorgallery">Images</GatsbyLink>
            </StyledButton>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/casacor/img01.Casacor.jpeg"
              alt="Projeto Wu"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <h3 className="project-title">
              <a>Hytasa-Lab</a>
            </h3>
          </div>

          <div className="project-description">
            <p>
              This my degree completion project, it is an intervention in an
              existing industrial warehouse with interesting characteristics,
              both formal and historical. The built space of co-creation is
              concentrated to release the rest to ephemeral construction through
              the use of robots and digital manufacturing.
            </p>

            <ul className="project-tech-list">
              <li>Rhinoceros3D</li>
              <li>Grasshopper</li>
              <li>Vray</li>
              <li>Adobe Illustrator</li>
              <li>Laser Cut</li>
            </ul>
          </div>

          <div className="project-links">
            <StyledButton
              className="resume-button"
              href="https://idus.us.es/handle/11441/37531"
              target="_blank"
            >
              Original files
            </StyledButton>
            <StyledButton className="resume-button" target="_blank">
              <GatsbyLink to="/hytasalabgallery">Images</GatsbyLink>
            </StyledButton>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/HytasaLab/img01.HytasaLab.PNG"
              alt="Projeto Wu"
              className="img"
            />
          </a>
        </div>
      </StyledProject>
    </section>
  );
};

export default Archjob;
