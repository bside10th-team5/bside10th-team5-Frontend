import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { INPUT_H } from "../../styles/theme";

const CheckboxLabel = styled.label.attrs((props) => ({
  width: props.width || "auto",
  marginRight: props.marginRight || "0",
  isChecked: props.isChecked || false,
}))`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${INPUT_H}px;
  padding: 13px 16px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  margin-right: ${(props) => props.marginRight};
  color: ${({ theme }) => theme.color.gray500};
  cursor: pointer;

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
    isChecked &&
    css`
      border: ${({ theme }) => `1px solid ${theme.color.orange}`};
      color: ${({ theme }) => theme.color.gray900};
    `}
`;

const Checkbox = ({ isChecked, onChange, id, width, marginRight, name }) => {
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
          <rect width="24" height="24" fill="#FF5A00" />
          <path
            d="M9.00003 16.17L4.83003 12L3.41003 13.41L9.00003 19L21 6.99997L19.59 5.58997L9.00003 16.17Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          className="custom-checkbox"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H23V23H1V1Z" stroke="#949494" strokeWidth="2" />
        </svg>
      )}
      <span className="button">{name}</span>
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
  name: PropTypes.string,
};
