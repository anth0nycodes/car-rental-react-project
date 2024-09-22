import React from "react";

const ChooseFeature = ({ image, title, paragraph }) => {
  return (
    <div className="choose__feature">
      <figure className="choose__feature__img__wrapper">
        <img src={image} alt="" className="choose__feature__img" />
      </figure>
      <div className="choose__feature__text">
        <h4 className="choose__feature__text__title">{title}</h4>
        <p className="choose__feature__text__para">{paragraph}</p>
      </div>
    </div>
  );
};

export default ChooseFeature;
