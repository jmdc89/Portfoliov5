import React from "react";
import Globals from "../styles/GlobalStyle";
import Nav from "../components/nav";
import Menu from "../components/menu";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
// import Photos from "../components/sections/photos";
import Featured from "../components/sections/featured";
import Contact from "../components/sections/contact";
import Sfjob from "../components/sections/sfjob";

const IndexPage = () => {
  return (
    <>
      <Globals />
      <Nav />
      <Menu />
      <Hero />
      <About />
      <Sfjob />
      {/* <Photos /> */}
      <Featured />
      <Contact />
    </>
  );
};

export default IndexPage;
