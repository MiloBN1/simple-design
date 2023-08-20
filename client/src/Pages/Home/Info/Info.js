import React from "react";
import {H1,H4,P,Wrapper,InfoBlock,InfoBlocks,TextGroup,Number} from "../Info/Info.styled"
import img from "../../../Assets/img-mainpage/main-2.svg";

export default function Info() {
  return (
    <Wrapper>
      <InfoBlock>
        <H1>Как это работает?</H1>
        <InfoBlocks>
          <Number>01</Number>
          <TextGroup>
            <H4>Выбор состава проекта</H4>
            <P>
              Выберите состав вашего проекта: только планировка или
              дизайн-проект
            </P>
          </TextGroup>
        </InfoBlocks>
        <InfoBlocks>
          <Number>02</Number>
          <TextGroup>
            <h4>Настройка проекта</h4>
            <p>
              Отметьте в корзине нужен ли вам профессиональный замер, подбор
              строительной бригады или точный просчет сметы
            </p>
          </TextGroup>
        </InfoBlocks>
        <InfoBlocks>
          <Number>03</Number>
          <TextGroup>
            <h4>Создание чертежей</h4>
            <p>Наши дизайнеры спроектируют интерьер, подготовят чертежи.</p>
          </TextGroup>
        </InfoBlocks>
      </InfoBlock>
      <img src={img} alt="img"/>
    </Wrapper>
  );
}
