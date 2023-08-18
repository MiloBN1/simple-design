import React from 'react'
import "../Request/request.css"
import pdf from "../../Assets/img-mainpage/pdf.svg";

export default function Request() {
  return (
    <div className="request">
            <button>Оставить заявку</button>
            <div className="pdf">
              <img src={pdf} alt="img"/>
              <p>Посмотреть пример</p>
            </div>
          </div>
  )
}
