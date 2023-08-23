import React from "react";
import { Wrapper, Pdf } from "./Request.styled";
import { Link } from "react-router-dom";
import pdf from "../../Assets/img-mainpage/pdf.svg";

export default function Request() {
  return (
    <Wrapper>
      <Link to="/request">
        <button>Оставить заявку</button>
      </Link>
      <Pdf>
        <img src={pdf} alt="img" />
        <p>Посмотреть пример</p>
      </Pdf>
    </Wrapper>
  );
}
