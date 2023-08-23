import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  FooterBottom,
  FooterTop,
  Logo,
  FooterBlock,
} from "./Footer.styled";
import logo from "../../Assets/img-mainpage/logo.svg";
import phone from "../../Assets/img-mainpage/phone.svg";

export default function Footer() {
  return (
    <Wrapper>
      <FooterTop>
        <Logo>
          <img src={logo} alt="logo-img" />
          <p>дизайн интерьеров</p>
        </Logo>
        <FooterBlock>
          <ul>
            <Link to="/">
              <li>Главная</li>
            </Link>
            <Link to="/test">
              <li>Тест</li>
            </Link>
            <Link to="/about">
              <li>О нас</li>
            </Link>
            <Link to="/prices">
              <li>Цены</li>
            </Link>
          </ul>
        </FooterBlock>
        <FooterBlock>
          <ul>
            <Link to="/privacy">
              <li>Политика конфиденциальности</li>
              <li>Условия пользования</li>
            </Link>
          </ul>
        </FooterBlock>
        <FooterBlock>
          <ul>
            <li>
              <img src={phone} alt="img" /> <p>+7 700 505 30 00</p>
            </li>
            <li>с 9:00 до 18:00</li>
          </ul>
        </FooterBlock>
      </FooterTop>
      <FooterBottom>
        <p>(с) 2023. Все права защищены.</p>
      </FooterBottom>
    </Wrapper>
  );
}
