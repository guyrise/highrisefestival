import React from "react";
import Logo from "../../../assets/images/HighriseLogoCropped.png";

const LoadingLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-12" src={Logo}></img>
    </div>
  );
};

export default LoadingLogo;
