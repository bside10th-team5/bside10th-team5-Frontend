import React from "react";
import PropTypes from "prop-types";
import { Dot, SelectedDot, SliderArrowContainer } from "./HomePage.styled";

const SliderArrow = ({ step, handleStep }) => {
  const onClickUpArrow = (value) => {
    if (value === 0) return;
    window.scrollTo({ left: 0, top: (Number(value) - 1) * (window.innerHeight - 80), behavior: "smooth" });
    handleStep(value - 1);
  };

  const onClickDownArrow = (value) => {
    if (value === 3) return;
    window.scrollTo({ left: 0, top: (Number(value) + 1) * (window.innerHeight - 80), behavior: "smooth" });
    handleStep(value + 1);
  };

  return (
    <SliderArrowContainer>
      <button onClick={() => onClickUpArrow(step)}>
        <img src="/img/home/icon/slider/arrow/up.svg" style={{ width: "3.3vw", height: "3.3vw" }} />
      </button>
      {step === 0 ? <SelectedDot /> : <Dot />}
      {step === 1 ? <SelectedDot /> : <Dot />}
      {step === 2 ? <SelectedDot /> : <Dot />}
      {step === 3 ? <SelectedDot /> : <Dot />}
      <button onClick={() => onClickDownArrow(step)}>
        <img src="/img/home/icon/slider/arrow/down.svg" style={{ width: "3.3vw", height: "3.3vw" }} />
      </button>
    </SliderArrowContainer>
  );
};

export default SliderArrow;

SliderArrow.propTypes = {
  step: PropTypes.number,
  handleStep: PropTypes.func,
};
