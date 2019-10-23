import React from "react";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Typography from "./components/Typography";
import Buttons from "./components/Buttons";
import Lists from "./components/Lists";
import Media from "./components/Media";
import Tables from "./components/Tables";
import Forms from "./components/Forms";
import Footer from "./components/Footer";

import "./assets/scss/style.scss";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Typography />
      <Buttons />
      <Lists />
      <Media />
      <Tables />
      <Forms />
      <Footer />
    </>
  );
}

export default App;
