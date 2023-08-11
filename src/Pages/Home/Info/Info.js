import React from "react";
import "../Info/info.css";
import Img from "../../../Assets/img-mainpage/main-2.svg";

export default function Info() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="infoBlock">
            <h1>Как это работает?</h1>
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
                <h4>Выбор состава проекта</h4>
                <p>
                  Выберите состав вашего проекта: только планировка или
                  дизайн-проект
                </p>
              </div>
            </div>
            <div className="infoBlocks">
              <div className="number">03</div>
              <div className="text-group">
                <h4>Выбор состава проекта</h4>
                <p>
                  Выберите состав вашего проекта: только планировка или
                  дизайн-проект
                </p>
              </div>
            </div>
          </div>
          <img src={Img} alt="img" className="img" />
        </div>
      </div>
    </>
  );
}
