import React from "react";
import "./Regist.css";

const Regist = ({ active, setActive }) => {
  return (
    <div
      className={active ? "regist active" : "regist"}
      onClick={() => setActive(false)}>
      <div className="regist-content" onClick={(e) => e.stopPropagation()}>
        {/* FORM START */}

        {/* FORM END */}
        REGISTRATION
      </div>
    </div>
  );
};
export default Regist;