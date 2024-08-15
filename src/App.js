import './App.css';
import Gnb from "./gnb/Gnb";
import MainComponent from "./pages/main/MainComponent";
import {FooterContainer} from "./css/GnbStyled";
import React from "react";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
        <Gnb/>
        <MainComponent/>
        <Footer/>
    </>
  );
}

export default App;
