import React from "react";
import "./card.css";

const Card = (props) => {
  const left = props.left;

  return (
    <div className="card-wrapper lg:gap-8 my-8 grid lg:grid-cols-2 grid-flow-dense border-8 border-yellow-200 outline outline-8 lg:px-6 lg:outline-none lg:border-none ">
      {/* lg:outline lg:outline-8 */}
      <div
        className={`info page-content px-6 text-start ${
          left ? "lg:text-end" : ""
        }`}
      >
        <h3
          className={`mb-3 text-center lg:text-start ${
            left ? "lg:text-end" : ""
          } `}
        >
          {props.cardData ? props.cardData.label : "Missing Data"}
        </h3>
        <p className="mb-3 pt-6">
          {props.cardData ? props.cardData.description : "Missing Data"}
        </p>
      </div>
      <div className={`img-wrapper ${left ? "order-last lg:order-first" : ""}`}>
        <div className="img-fmt2-box lg:border-[0.8rem] lg:border-yellow-200 lg:outline lg:outline-[0.4rem] ">
          <img
            className="img-fmt2"
            src={
              props.cardData
                ? props.cardData.image
                : "https://placebear.com/640/360"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
