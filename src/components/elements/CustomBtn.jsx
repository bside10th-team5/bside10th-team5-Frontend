import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { INPUT_H, WHITE, ORANGE, GRAY700, GRAY300 } from "../../styles/theme";

const Button = styled.button.attrs((props) => ({
  width: props.width || "10rem",
  height: props.height || `${INPUT_H}px`,
  borderRadius: props.borderRadius || "5px",
  color: props.color || `${WHITE}`,
  bgColor: props.bgColor,
  border: props.border || `1px solid ${ORANGE}`,
  margin: props.margin || "0",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin};

  &:disabled {
    border: 1px solid ${GRAY300};
    background-color: ${WHITE};
    color: ${GRAY700};
    cursor: not-allowed;
  }
`;

const CustomBtn = ({ text, onClick, width, height, borderRadius, color, bgColor, border, margin, disabled }) => {
  return (
    <Button
      className="button"
      width={width}
      height={height}
      borderRadius={borderRadius}
      color={color}
      bgColor={bgColor}
      onClick={onClick}
      border={border}
      margin={margin}
      disabled={disabled}
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
  border: PropTypes.string,
  margin: PropTypes.string,
  disabled: PropTypes.bool,
};
