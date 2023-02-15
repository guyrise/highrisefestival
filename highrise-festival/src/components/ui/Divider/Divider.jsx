import React from "react";

import "./divider.css";

const Divider = () => {
  return (
    <div className="w-screen m-0 p-0">
      <div className="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Divider;
