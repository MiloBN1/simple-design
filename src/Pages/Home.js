import React from 'react';
import img1 from "../Assets/img-mainpage/main-1-1.svg"
import img2 from "../Assets/img-mainpage/main-1-2.svg"
import img3 from "../Assets/img-mainpage/main-1-3.svg"
import kaspi from "../Assets/img-mainpage/Kaspi.svg"

export default function Home() {
  function Consultation(){
    return <button className='btn'>Консультация</button>
  }
  return (
    <div className="home">
        <div className="home-wrapper">
          <div className="first-section">
            <h1>Дизайн-проект для вашей квартиры <br/> за 2 недели и 199 000 ₸</h1>
            <Consultation/>
            <div className="info-block">
              <div className="info">
                <img src={img1} alt="img" className="img" />
                <div className="info-text">
                  <h3>2 недели</h3>
                  <p>срок выполнения заказа</p>
                </div>
              </div>
              <div className="info">
                <img src={img2} alt="img" className="img" />
                <div className="info-text">
                  <h3>Не важно</h3>
                  <p>Сколько квадратов, цена - одна!</p>
                </div>
              </div>
              <div className="info">
                <img src={img3} alt="img" className="img" />
                <div className="info-text">
                  <h3>Рассрочка</h3>
                  <p>до 24 месяцев</p>
                  <img src={kaspi} alt="img" className="img" />
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}