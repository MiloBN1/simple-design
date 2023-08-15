import React from "react";
import "../ServicesPage/services.css";
import styles from "../ServicesPage/services.module.css";
import Img from "../../../Assets/img-mainpage/main-3.svg";
import pdf from "../../../Assets/img-mainpage/pdf.svg";

export default function Services() {
  return (
    <div className="services-wrapper">
      <h1 className={styles.h1}>Наши услуги</h1>
      <div className="service-block">
        <div className="service-block-info">
          <h2>Планировка за 99 000 ₸</h2>
          <p>Срок выполнения: 5 дней</p>
          <p>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.
          </p>
          <ul>
            <li>2 варианта планировки + финальный</li>
            <li>обмерный план</li>
            <li>план демонтажа</li>
            <li>план монтажа перегородок</li>
          </ul>
          <div className="request">
            <button>Оставить заявку</button>
            <div className="pdf">
              <img src={pdf} alt="img"/>
              <p>Посмотреть пример</p>
            </div>
          </div>
        </div>
        <img src={Img} alt="img" />
      </div>
      <div className="service-block"></div>
      <div className="service-block"></div>
    </div>
  );
}
