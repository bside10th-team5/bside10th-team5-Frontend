import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const RadioCheckBoxLabel = styled.label.attrs((props) => ({
  width: props.width || "auto",
  marginRight: props.marginRight || "0",
  isChecked: props.isChecked || false,
}))`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 50px;
  margin-right: ${(props) => props.marginRight};
  color: ${({ theme }) => theme.color.gray500};
  cursor: pointer;

  & > input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .custom-radio {
    margin-right: 0.75rem;
  }

  ${({ isChecked }) =>
    isChecked &&
    css`
      color: ${({ theme }) => theme.color.gray900};
    `}
`;

const RadioCheckBox = ({ isChecked, onChange, children, width, marginRight, name, value }) => {
  return (
    <RadioCheckBoxLabel htmlFor={value} width={width} marginRight={marginRight} isChecked={isChecked}>
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
      {children}
    </RadioCheckBoxLabel>
  );
};

export default RadioCheckBox;

RadioCheckBox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
  marginRight: PropTypes.string,
};
