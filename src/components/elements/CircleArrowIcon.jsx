import React from "react";
import PropTypes from "prop-types";
import { GRAY500, GRAY900 } from "../../styles/theme";

const CircleArrowIcon = ({ isActive = false, rotate = 0 }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotate}deg)` }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="29" fill="white" stroke="#EFEFEF" strokeWidth="6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.6975 32.3942C43.6975 33.2778 43.0259 33.9942 42.1975 33.9942L21.1975 33.9942C20.3691 33.9942 19.6975 33.2778 19.6975 32.3942C19.6975 31.5105 20.3691 30.7942 21.1975 30.7942L42.1975 30.7942C43.0259 30.7942 43.6975 31.5105 43.6975 32.3942Z"
        fill={isActive ? GRAY900 : GRAY500}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.2549 31.3334C43.845 31.9192 43.845 32.8689 43.2549 33.4547L32.6771 43.9547C32.087 44.5405 31.1302 44.5405 30.5401 43.9547C29.95 43.3689 29.95 42.4192 30.5401 41.8334L40.0494 32.394L30.5401 22.9547C29.95 22.3689 29.95 21.4192 30.5401 20.8334C31.1302 20.2476 32.087 20.2476 32.6771 20.8334L43.2549 31.3334Z"
        fill={isActive ? GRAY900 : GRAY500}
      />
    </svg>
  );
};

export default CircleArrowIcon;

CircleArrowIcon.propTypes = {
  isActive: PropTypes.bool,
  rotate: PropTypes.number,
};
