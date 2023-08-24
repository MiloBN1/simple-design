import React from "react";
import "./basket.css"

const Basket = ({ active, setActive, children}) => {
  return (
    <div className={active? "busket active" : "busket"} onClick={() => setActive(false)}>
      <div className="busket-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Basket;
