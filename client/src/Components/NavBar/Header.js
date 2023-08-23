import { React, useState } from "react";
import {
  Wrapper,
  Account,
  AccountLine,
  Navbar,
  Logo,
  NavItems,
  NavDropdown,
} from "./Header.styled";
import "./header.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Index-Home/Index-Home";
import Test from "../../Pages/TestPage/Test";
import Catalog from "../../Pages/Catalog/Catalog";
import About from "../../Pages/About/About";
import Prices from "../../Pages/Prices/Prices";
import Contact from "../../Pages/Contact/Contact";
import Request from "../../Pages/Request/Request";
import Privacy from "../../Pages/Privacy/Privacy";
import Designs from "../../Pages/Designs/Designs";

import logo from "../../Assets/img-mainpage/logo.svg";
import phone from "../../Assets/img-mainpage/phone.svg";

const Header = () => {
  const DropDown = () => {
    return (
      <NavDropdown>
        <ul>
          <li>
            <img src={phone} alt="img" />
            +7 700 505 3000
          </li>
          <li>с 9:00 до 18:00</li>
        </ul>
      </NavDropdown>
    );
  };

  const [openDropDown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropDown);
  };

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
              <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                Контакты
              </span>
            </NavItems>
            {openDropDown && <DropDown />}
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
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Request" element={<Request />} />
          <Route exact path="/Privacy" element={<Privacy />} />
          <Route exact path="/Designs" element={<Designs />} />
        </Routes>
      </Router>
      ;
    </>
  );
};

export default Header;
