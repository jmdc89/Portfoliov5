import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon } from "../../components/icons";
import { StaticImage } from "gatsby-plugin-image";

const Featured = () => {
  return (
    <>
      <section id="projects">
        <h2 className="numbered-heading">Some Things I’ve Built</h2>
      </section>

      <StyledProjectGrid>
        <StyledProject>
          <div className="project-content">
            <div>
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">
                <a>title</a>
              </h3>
              <div className="project-description" />
              <ul className="project-tech-list">
                <li>tech1</li>
                <li>tech2</li>
                <li>tech3</li>
              </ul>
              <div className="project-links">
                <a href={github} aria-label="GitHub Link">
                  <Icon name="GitHub" />
                </a>
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                >
                  <Icon name="External" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <a>
              <StaticImage
                src="../../images/me.PNG"
                alt="Image 1"
                className="img"
              />
            </a>
          </div>
        </StyledProject>
      </StyledProjectGrid>
    </>
  );
};

export default Featured;
