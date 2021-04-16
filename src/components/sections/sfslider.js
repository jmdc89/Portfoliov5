// import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// const query = graphql`
//   {
//     sfPhotos: allFile(
//       filter: { relativeDirectory: { eq: "sf" } }
//       sort: { fields: name }
//     ) {
//       nodes {
//         id
//         name
//         childImageSharp {
//           gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//         }
//       }
//     }
//   }
// `;

// const Sfjob = () => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   const slides = data.sfPhotos.nodes.childImageSharp.gatsbyImageData;

//   const data = useStaticQuery(query);

//   return (
//     <section className="slider">
//       <BiLeftArrow className="left-arrow" onClick={prevSlide} />
//       <BiRightArrow className="right-arrow" onClick={nextSlide} />
//       {data.sfPhotos.nodes.map((image, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <GatsbyImage
//                 key={image.id}
//                 image={image.childImageSharp.gatsbyImageData}
//                 alt={image.name.split(".")[1].split("-").join(" ")}
//               />
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default Sfjob;
