import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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
  console.log(data);

  return (
    <>
      <h1>photo</h1>
      <h2>bye</h2>
      {data.sfPhotos.nodes.map((image) => (
        <GatsbyImage
          key={image.id}
          image={image.childImageSharp.gatsbyImageData}
          alt={image.name.split(".")[1].split("-").join(" ")}
        />
      ))}
    </>
  );
};

export default Sfjob;
