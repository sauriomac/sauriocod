import React from "react";
import About from "../pages/about/index";
import Academy from "../pages/academy/index";
import Contact from "../pages/contact/index";
import Project from "../pages/project/index";
import { ContainerHeader } from "./Header";

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <About />
        <Project />
        <Academy />
        <Contact />
      </ContainerHeader>
    </>
  );
};

export default Header;
