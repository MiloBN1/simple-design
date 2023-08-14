import React from "react";
import HomeMain from "../Home-Main/home-main";
import Info from '../Info/Info';
import Services from "../ServicesPage/Services"
import "./index-home.css";
export default function Home() {
  return (
    <>
      <HomeMain />
      <Info/>
      <Services/>
    </>
  );
}
