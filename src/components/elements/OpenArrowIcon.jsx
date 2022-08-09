import React from "react";
import PropTypes from "prop-types";
// import { GRAY500, GRAY900 } from "../../styles/theme";

const OpenArrowIcon = ({ rotate = 0, color = "#111111", onClick }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
      onClick={onClick}
    >
      <path d="M8.34375 11.877H14.0006H19.6575L14.0006 17.5338L8.34375 11.877Z" fill={color} />
    </svg>
  );
};

export default OpenArrowIcon;

OpenArrowIcon.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  onClick: PropTypes.func,
};
