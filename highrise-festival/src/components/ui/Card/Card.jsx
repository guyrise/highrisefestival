import { forwardRef } from "react";
import Tilt from "react-parallax-tilt";

import { useInView } from "react-intersection-observer";

import "./card.css";

const Card = (props) => {
  const { ref: cardRef, inView: visible } = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-150px",
    fallbackInView: true,
    triggerOnce: true,
  });

  const left = props.left;
  const color = props.cardData.color;
  const borderColor = props.cardData.borderColor;

  return (
    <div
      ref={cardRef}
      className={`card-observer ${left ? "left" : "right"} ${
        visible ? "show-card" : ""
      }`}
    >
      <Tilt
        tiltReverse="true"
        perspective={300}
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
        tiltMaxAngleX={0.3}
        tiltMaxAngleY={0.3}
      >
        <div
          className={`card-wrapper lg:gap-12 xl:gap-12 my-36 lg:px-12 grid lg:grid-cols-2 grid-flow-dense outline outline-2 lg:outline-none`}
        >
          <div
            className={`info page-content pt-8 pb-0  text-start
          ${left ? "lg:text-end xl:pr-12" : "xl:pl-12"}`}
          >
            <h3
              className={`mb-3 text-center lg:px-6 xl:px-0 ${
                color ? color : "text-black"
              } ${left ? "lg:text-end" : "lg:text-start "} `}
            >
              {props.cardData ? props.cardData.label : "Missing Data"}
            </h3>
            <p
              className={`mb-3 pt-6 px-6 px-6 xl:px-0 ${
                color ? color : "text-black"
              } ${props.isWellnessPage ? "sanctury" : ""}`}
            >
              {props.cardData ? props.cardData.description : "Missing Data"}
            </p>
          </div>

          <div
            className={`img-wrapper pt-8 pb-0 pt-8 lg:py-8  ${
              left ? "order-last lg:order-first" : ""
            }`}
          >
            <Tilt
              tiltReverse="true"
              perspective={300}
              transitionEasing="cubic-bezier(.03,.98,.52,.99)"
              tiltMaxAngleX={0.5}
              tiltMaxAngleY={0.5}
            >
              <div
                className={`img-fmt2-box border-[0.8rem] ${
                  borderColor ? borderColor : "border-yellow-200"
                } outline outline-2 lg:shadow-[-60px_-70px_0px_-40px_#9a9a9a,60px_70px_0_-40px_#1c1c1c] rounded-lg`}
              >
                <img
                  className="img-fmt2"
                  src={
                    props.cardData.image
                      ? props.cardData.image
                      : "https://via.placeholder.com/600x800/000000/FFFFFF.png?text=Sorry+this+image+failed+to+load"
                  }
                  alt=""
                />
              </div>
            </Tilt>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
