import React from "react";
import HomeMain from "../Home-Main/home-main";
import Info from '../Info/Info';
import Services from "../ServicesPage/Services";
import Design from "../Design/Design";
import TestPageLink from "../TestPageLink/TestLink";
import Questions from "../Questions/Questions";
import Footer from "../../../Components/Footer/Footer"
import {Wrapper} from "./Index-Home.styled";

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
      <Info/>
      <Services/>
      <Design/>
      <TestPageLink/>
      <Questions/>
      <Footer/>
    </Wrapper>
  );
}
