import React from "react";
import PropTypes from "prop-types";

const StarIcon = ({ isActive = false, value, onClick }) => {
  return (
    <button type="button" value={value} onClick={onClick}>
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0L16.0487 6.42749L23.4127 8.2918L18.5509 14.1285L19.0534 21.7082L12 18.888L4.94658 21.7082L5.44912 14.1285L0.587322 8.2918L7.95133 6.42749L12 0Z"
          fill={isActive ? "#FF9F00" : "#949494"}
        />
      </svg>
    </button>
  );
};

export default StarIcon;

StarIcon.propTypes = {
  isActive: PropTypes.bool,
  value: PropTypes.number,
  onClick: PropTypes.func,
};
