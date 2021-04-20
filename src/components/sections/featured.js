import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icons";
import { StaticImage } from "gatsby-plugin-image";

// const StyledProjectsGrid = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   a {
//     position: relative;
//     z-index: 1;
//   }
// `;

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

const Featured = () => {
  return (
    <section id="webdevelopment">
      <NumberedHeading>Web Development Projects</NumberedHeading>
      {/* <StyledProjecstGrid> */}
      <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">
              <a href="https://netflixcloneui.netlify.app/">Netflix Clone</a>
            </h3>
          </div>

          <div className="project-description">
            <p>
              This application (a Netflix clone) was built using React (Custom
              Hooks, Context), Firebase & Styled Components. I have built the
              following pages within this application: sign in, sign up, browse
              & lastly the homepage. There are four different pages, some using
              protected routes with auth listeners. Firebase firestore handles
              all the data and that data is retrieved using a custom hook;
              authentication is used on all pages, which is handled by Firebase
              as well.
            </p>

            <ul className="project-tech-list">
              <li>React</li>
              <li>Styled Components</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className="project-links">
            <a
              aria-label="GitHub Link"
              href="https://github.com/jmdc89/netflixClone"
            >
              <Icon name="GitHub" />
            </a>
            <a
              aria-label="External Link"
              className="external"
              href="https://netflixcloneui.netlify.app/"
            >
              <Icon name="External" />
            </a>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/projects/netflixclone.JPG"
              alt="Image 1"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">
              <a href="https://talerobot.netlify.app/">Robot Picker</a>
            </h3>
          </div>

          <div className="project-description">
            This is a small primer on how to use GLTF models on the web,
            specifically how to use them as dynamic assets. The 3d model is my
            own version of the robot from "The tales from the loop" series
            modeled in rhinoceros3D.
            <ul className="project-tech-list">
              <li>React</li>
              <li>ThreeJS</li>
              <li>ThreeFiber</li>
            </ul>
          </div>

          <div className="project-links">
            <a
              aria-label="GitHub Link"
              href="https://github.com/jmdc89/threejs-practise"
            >
              <Icon name="GitHub" />
            </a>
            <a
              aria-label="External Link"
              className="external"
              href="https://talerobot.netlify.app/"
            >
              <Icon name="External" />
            </a>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/projects/robotpicker.JPG"
              alt="Image 1"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">
              <a href="https://react-microprojects.netlify.app/">
                React microProjects
              </a>
            </h3>
          </div>

          <div className="project-description">
            These microprojects have been developed using React (useState,
            useEffect, Conditional Rendering, Forms, useRef, useContext,
            useReducer, React Router and useCallback)
            <ul className="project-tech-list">
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Sass</li>
            </ul>
          </div>

          <div className="project-links">
            <a
              aria-label="GitHub Link"
              href="https://github.com/jmdc89/reactProjects"
            >
              <Icon name="GitHub" />
            </a>
            <a
              aria-label="External Link"
              className="external"
              href="https://react-microprojects.netlify.app/"
            >
              <Icon name="External" />
            </a>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/projects/microProjects.JPG"
              alt="micro projects"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">
              <a href="https://teslauiclone.netlify.app/">Tesla UI Clone</a>
            </h3>
          </div>

          <div className="project-description">
            This application (a Tesla Homepage UI clone) was built using React,
            TypeScript and Styled Components. The focus was to replicate the
            scroll transition functionality.
            <ul className="project-tech-list">
              <li>React</li>
              <li>TypeScript</li>
              <li>Styled Components</li>
            </ul>
          </div>

          <div className="project-links">
            <a
              aria-label="GitHub Link"
              href="https://github.com/jmdc89/TeslaReact"
            >
              <Icon name="GitHub" />
            </a>
            <a
              aria-label="External Link"
              className="external"
              href="https://teslauiclone.netlify.app/"
            >
              <Icon name="External" />
            </a>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/projects/teslauiclone.JPG"
              alt="Tesla Ui Clone"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">
              <a href="https://portwebsitev1.netlify.app/">Portfolio v1</a>
            </h3>
          </div>

          <div className="project-description">
            First iteration of my personal website built with Gatsby and Strapi.
            <ul className="project-tech-list">
              <li>Gatsby</li>
              <li>Strapi</li>
              <li>Styled Components</li>
            </ul>
          </div>

          <div className="project-links">
            <a
              aria-label="GitHub Link"
              href="https://github.com/jmdc89/gatsby-strapi-Portfolio-2021"
            >
              <Icon name="GitHub" />
            </a>
            <a
              aria-label="External Link"
              className="external"
              href="https://portwebsitev1.netlify.app/"
            >
              <Icon name="External" />
            </a>
          </div>
        </div>

        <div className="project-image">
          <a>
            <StaticImage
              src="../../images/projects/portfoliov1.JPG"
              alt="Tesla Ui Clone"
              className="img"
            />
          </a>
        </div>
      </StyledProject>

      {/* </StyledProjectsGrid> */}
    </section>
  );
};

export default Featured;
