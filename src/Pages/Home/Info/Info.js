import React from "react";
import styles from"../Info/info.css";
import "../Info/info.module.css";
import Img from "../../../Assets/img-mainpage/main-2.svg";

export default function Info() {
  return (
    <div className="info-wrapper">
      <div className="infoBlock">
        <h1 className={styles.h1}>Как это работает?</h1>
        <div className="infoBlocks">
          <div className="number">01</div>
          <div className="text-group">
            <h4>Выбор состава проекта</h4>
            <p>
              Выберите состав вашего проекта: только планировка или
              дизайн-проект
            </p>
          </div>
        </div>
        <div className="infoBlocks">
          <div className="number">02</div>
          <div className="text-group">
            <h4>Настройка проекта</h4>
            <p>
              Отметьте в корзине нужен ли вам профессиональный замер, подбор
              строительной бригады или точный просчет сметы
            </p>
          </div>
        </div>
        <div className="infoBlocks">
          <div className="number">03</div>
          <div className="text-group">
            <h4>Создание чертежей</h4>
            <p>Наши дизайнеры спроектируют интерьер, подготовят чертежи.</p>
          </div>
        </div>
      </div>
      <img src={Img} alt="img" className="img" />
    </div>
  );
}
