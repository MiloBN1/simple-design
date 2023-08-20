import React from "react";
import {
  Wrapper,
  Account,
  AccountLine,
  Navbar,
  Logo,
  NavItems,
  NavDropdown,
} from "./Header.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../../Assets/img-mainpage/logo.svg";
import Home from "../../Pages/Home/Index-Home/Index-Home";
import Test from "../../Pages/TestPage/Test";
import Catalog from "../../Pages/Catalog/Catalog";
import About from "../../Pages/About/About";
import Prices from "../../Pages/Prices/Prices";
import "../Header/header.css";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <Navbar>
            <Logo>
              <img src={logo} alt="logo-img" />
              <p>дизайн интерьеров</p>
            </Logo>

            <NavItems>
              <a className="navItem" href="/">
                Главная
              </a>
              <a className="navItem" href="/Test">
                Тест
              </a>
              <a className="navItem" href="/Catalog">
                Каталог
              </a>
              <a className="navItem" href="/About">
                О нас
              </a>
              <a className="navItem" href="/Prices">
                Цены
              </a>
              <NavDropdown>
                Контакты
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  class="arrow-down"
                  viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </NavDropdown>
            </NavItems>

            <Account>
              <a href="/" className="login">
                Войти
              </a>
              <AccountLine></AccountLine>
              <a href="/" className="regist">
                Зарегистрироваться
              </a>
            </Account>
          </Navbar>
        </div>
      </Wrapper>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Test" element={<Test />} />
          <Route exact path="/Catalog" element={<Catalog />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Prices" element={<Prices />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;