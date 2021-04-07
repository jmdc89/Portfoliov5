import React from "react";
import Globals from "../styles/GlobalStyle";
import Nav from "../components/nav";
import Menu from "../components/menu";
import Hero from "../components/sections/hero";

const IndexPage = () => {
  return (
    <>
      <Globals />
      <Nav />
      <Menu />
      <Hero />
    </>
  );
};

export default IndexPage;
