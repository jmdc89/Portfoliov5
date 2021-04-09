import React from "react";
import Globals from "../styles/GlobalStyle";
import Nav from "../components/nav";
import Menu from "../components/menu";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Photos from "../components/sections/photos";

const IndexPage = () => {
  return (
    <>
      <Globals />
      <Nav />
      <Menu />
      <Hero />
      <About />
      <Photos />
    </>
  );
};

export default IndexPage;
