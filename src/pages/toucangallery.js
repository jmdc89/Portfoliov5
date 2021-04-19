import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Globals from "../styles/GlobalStyle";

const ImageContainer = styled.div`
  text-align: center;
  margin: 50px 0;

  h1 {
    margin-bottom: 50px;
  }
  h2 {
    margin-bottom: 30px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  /* padding: 0 32px; */
  width: 100%;
`;

const query = graphql`
  {
    sfPhotos: allFile(
      filter: { relativeDirectory: { eq: "beak" } }
      sort: { fields: name }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`;

const Toucan = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <Globals />
      <ImageContainer>
        <h1>The toucan beak</h1>
        {/* <h2>Gallery</h2> */}
        <ImageGrid>
          {data.sfPhotos.nodes.map((image, index) => (
            <GatsbyImage
              key={image.id}
              classname="img"
              image={image.childImageSharp.gatsbyImageData}
              alt={image.name.split(".")[1].split("-").join(" ")}
            />
          ))}
        </ImageGrid>
      </ImageContainer>
    </>
  );
};

export default Toucan;
