import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const CheckboxLabel = styled.label.attrs((props) => ({
  width: props.width || "124px",
  marginRight: props.marginRight || "0",
  isChecked: props.isChecked || false,
}))`
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: ${(props) => props.width};
  height: 50px;
  padding-left: 19px;
  border: ${({ theme }) => `1px solid ${theme.color.green}`};
  margin-right: ${(props) => props.marginRight};
  color: ${({ theme }) => theme.color.gray900};

  & > input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .custom-checkbox {
    margin-right: 0.75rem;
  }

  ${({ isChecked }) =>
    !isChecked &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.color.gray100};
      color: ${({ theme }) => theme.color.gray500};
    `}
`;

const Checkbox = ({ isChecked, onChange, children, id, width, marginRight }) => {
  return (
    <CheckboxLabel htmlFor={id} width={width} marginRight={marginRight} isChecked={isChecked}>
      <input id={id} onChange={onChange} type="checkbox" checked={isChecked} />
      {isChecked ? (
        <svg
          className="custom-checkbox"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#03C348" />
          <path
            d="M9.99998 14.78L7.21998 12L6.27332 12.94L9.99998 16.6667L18 8.66668L17.06 7.72668L9.99998 14.78Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          className="custom-checkbox"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13" cy="13" r="12.5" fill="white" stroke="#C8C8C8" />
        </svg>
      )}
      {children}
    </CheckboxLabel>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
  marginRight: PropTypes.string,
};
