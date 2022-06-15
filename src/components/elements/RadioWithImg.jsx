import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  position: relative;
  width: 216px;
  height: 158px;

  & input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .custom-radio {
    position: absolute;
    bottom: 0;
    left: 96px;
  }
`;

const RadioWithImg = ({ name, value, onChange, isChecked, src, alt }) => {
  return (
    <Wrapper>
      <label>
        {/* <input type="radio" name={name} value={value} /> */}
        <input type="radio" id={value} name={name} value={value} onChange={onChange} checked={isChecked} />
        {isChecked ? (
          <svg
            className="custom-radio"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" fill="white" stroke="#FF5A00" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="#FF5A00" />
          </svg>
        ) : (
          <svg
            className="custom-radio"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="11" stroke="#949494" strokeWidth="2" />
          </svg>
        )}

        <img src={src} alt={alt} width={216} height={122} className="ko-button" />
      </label>
    </Wrapper>
  );
};

export default RadioWithImg;

RadioWithImg.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
