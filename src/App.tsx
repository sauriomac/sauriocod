import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar/index";
import Banner from "./components/pages/banner";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Header />
      <Footer />
    </>
  );
};

export default App;
