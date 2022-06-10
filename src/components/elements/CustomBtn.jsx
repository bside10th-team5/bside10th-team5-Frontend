import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button.attrs((props) => ({
  width: props.width || "10rem",
  height: props.height || "50px",
  borderRadius: props.borderRadius || "5px",
  color: props.color || "#FFFFFF",
  bgColor: props.bgColor,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;

const CustomBtn = ({ text, onClick, width, height, borderRadius, color, bgColor }) => {
  return (
    <Button
      className="ko-button"
      width={width}
      height={height}
      borderRadius={borderRadius}
      color={color}
      bgColor={bgColor}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;

CustomBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};
