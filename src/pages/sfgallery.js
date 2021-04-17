import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const query = graphql`
  {
    sfPhotos: allFile(
      filter: { relativeDirectory: { eq: "sf" } }
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

const Sfjob = () => {
  const data = useStaticQuery(query);

  return (
    <div className="image-container">
      <h1>Sagrada Familia</h1>
      <div className="image-grid">
        {data.sfPhotos.nodes.map((image, index) => (
          <GatsbyImage
            key={image.id}
            classname="image-item"
            image={image.childImageSharp.gatsbyImageData}
            alt={image.name.split(".")[1].split("-").join(" ")}
          />
        ))}
      </div>
    </div>
  );
};

export default Sfjob;
