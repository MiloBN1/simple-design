import React from "react";
import { Wrapper, Pdf } from "./Request.styled";
import pdf from "../../Assets/img-mainpage/pdf.svg";

export default function Request() {
  return (
    <Wrapper>
      <button>Оставить заявку</button>
      <Pdf>
        <img src={pdf} alt="img" />
        <p>Посмотреть пример</p>
      </Pdf>
    </Wrapper>
  );
}
