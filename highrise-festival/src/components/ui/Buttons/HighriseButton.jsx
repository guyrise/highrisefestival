import React from "react";

import "./highrisebutton.css";

const HighriseButton = ({ label, fontSize, onClick }) => {
  return (
    <div className="button-container h-full flex justify-center items-center p-12 mb-24">
      <button className="highrise-button" onClick={onClick}>
        <span className={fontSize} data-glitch={label}>
          {label}
        </span>
      </button>
    </div>
  );
};

export default HighriseButton;
