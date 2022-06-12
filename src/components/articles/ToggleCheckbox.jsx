import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ToggleCheckBoxWrapper = styled.label.attrs((props) => ({
  width: props.width || "auto",
  marginRight: props.marginRight || "0",
  isChecked: props.isChecked || false,
}))`
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: 50px;
  padding: 13px 16px;
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

  & .custom-toggle {
    margin-right: 0.75rem;
  }

  ${({ isChecked }) =>
    isChecked &&
    css`
      color: ${({ theme }) => theme.color.gray900};
    `}
`;

const ToggleCheckbox = ({ isChecked, onChange, children, id, width, marginRight }) => {
  return (
    <ToggleCheckBoxWrapper htmlFor={id} width={width} marginRight={marginRight} isChecked={isChecked}>
      <input id={id} onChange={onChange} type="checkbox" checked={isChecked} />
      {isChecked ? (
        <svg
          className="custom-toggle"
          width="36"
          height="18"
          viewBox="0 0 36 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="18" rx="9" fill="#FF5A00" />
          <circle cx="27" cy="9" r="6" fill="white" />
        </svg>
      ) : (
        <svg
          className="custom-toggle"
          width="36"
          height="18"
          viewBox="0 0 36 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="18" rx="9" fill="#C8C8C8" />
          <circle cx="9" cy="9" r="6" fill="white" />
        </svg>
      )}
      {children}
    </ToggleCheckBoxWrapper>
  );
};

export default ToggleCheckbox;

ToggleCheckbox.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  width: PropTypes.string,
  marginRight: PropTypes.string,
};
