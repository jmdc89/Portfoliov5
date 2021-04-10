import React, { Component } from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const planos = [
  {
    name: "Plano 01",
    url: "../../images/portfolio/HytasaLab",
  },
  {
    name: "Plano 02",
    url: "../../images/portfolio/HytasaLab/plano02.jpg",
  },
  {
    name: "Plano 03",
    url: "../../images/portfolio/HytasaLab/plano03.jpg",
  },
  {
    name: "Plano 04",
    url: "../../images/portfolio/HytasaLab/plano04.jpg",
  },
  {
    name: "Plano 05",
    url: "../../images/portfolio/HytasaLab/plano05.jpg",
  },
  {
    name: "Plano 06",
    url: "../../images/portfolio/HytasaLab/plano06.jpg",
  },
  {
    name: "Plano 07",
    url: "../../images/portfolio/HytasaLab/plano07.jpg",
  },
  {
    name: "Plano 08",
    url: "../../images/portfolio/HytasaLab/plano08.jpg",
  },
  {
    name: "Plano 09",
    url: "../../images/portfolio/HytasaLab/plano09.jpg",
  },
];

const Photos = () => {
  return (
    <>
      {planos.map((plano, index) => {
        return <GatsbyImage src={plano.url} alt={plano.name} />;
      })}
    </>
  );
};

export default Photos;
