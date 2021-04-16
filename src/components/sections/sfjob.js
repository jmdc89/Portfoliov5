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
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const data = useStaticQuery(query);

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
