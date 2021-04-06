import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { navLinks } from "../config";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--navy);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  color: var(--lightest-slate);
  z-index: 12;
`;

const StyledLinks = styled.div`
  display: flex;
  float: right;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        color: white;
        padding: 10px;
        &:hover {
          color: var(--green);
        }
        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
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
  }
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ol>

          <div>
            <a className="resume-button" href="/resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
