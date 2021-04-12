import React, { useEffect } from "react";
import styled from "styled-components";
import { srConfig, email } from "../../config";

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};
