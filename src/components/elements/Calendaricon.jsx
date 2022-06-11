import React from "react";
import PropTypes from "prop-types";

const CalendarIcon = ({ color = "#949494", width = 21, height = 23 }) => {
  return (
    <svg
      className="icon"
      width={width}
      height={height}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.125 10.375H4.875V12.625H7.125V10.375ZM11.625 10.375H9.375V12.625H11.625V10.375ZM16.125 10.375H13.875V12.625H16.125V10.375ZM18.375 2.5H17.25V0.25H15V2.5H6V0.25H3.75V2.5H2.625C1.37625 2.5 0.38625 3.5125 0.38625 4.75L0.375 20.5C0.375 21.7375 1.37625 22.75 2.625 22.75H18.375C19.6125 22.75 20.625 21.7375 20.625 20.5V4.75C20.625 3.5125 19.6125 2.5 18.375 2.5ZM18.375 20.5H2.625V8.125H18.375V20.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon;

CalendarIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
