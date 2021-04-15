import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
  {
    sfPhotos: allFile(filter: { relativeDirectory: { eq: "sf" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 10)
        }
      }
    }
  }
`;

const Sfjob = () => {
  const data = useStaticQuery(query);
  console.log(data);

  return (
    <>
      <h1>photo</h1>
      <h2>bye</h2>
      {data.sfPhotos.nodes.map((image) => (
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} />
      ))}
    </>
  );
};

export default Sfjob;
