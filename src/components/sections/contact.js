import React from "react";
import styled from "styled-components";
import { email } from "../../config";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
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
    margin-top: 50px;
  }
`;

const NumberedHeading = styled.h2`
  display: block;
  margin-bottom: 20px;
  color: var(--green);
  font-size: var(--fz-md);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fz-sm);
    position: relative;
    bottom: 4px;
    /* counter-increment: section; */
    content: "03.";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-weight: 400;

    @media (max-width: 480px) {
      margin-bottom: -3px;
      margin-right: 5px;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <NumberedHeading>What’s Next?</NumberedHeading>

      <h2 className="title">Get In Touch</h2>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
