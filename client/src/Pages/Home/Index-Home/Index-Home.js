import React from "react";
import HomeMain from "../Home-Main/home-main";
import Info from '../Info/Info';
import Services from "../ServicesPage/Services";
import Design from "../Design/Design";
import TestPageLink from "../TestPageLink/TestLink";
import Questions from "../Questions/Questions"
import "./index-home.css";
export default function Home() {
  return (
    <div className="home">
      <HomeMain/>
      <Info/>
      <Services/>
      <Design/>
      <TestPageLink/>
      <Questions/>
    </div>
  );
}
