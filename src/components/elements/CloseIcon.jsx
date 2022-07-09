import React from "react";
import PropTypes from "prop-types";
import { GRAY900 } from "../../styles/theme";

const CloseIcon = ({ color = `${GRAY900}`, width = 10, height = 10 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.66671 1.27337L8.72671 0.333374L5.00004 4.06004L1.27337 0.333374L0.333374 1.27337L4.06004 5.00004L0.333374 8.72671L1.27337 9.66671L5.00004 5.94004L8.72671 9.66671L9.66671 8.72671L5.94004 5.00004L9.66671 1.27337Z"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
