import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { GRAY300, GRAY500, GRAY900, INPUT_H } from "../../styles/theme";

const Wrapper = styled.div.attrs((props) => ({
  width: props.width || "100%",
  height: props.height || `${INPUT_H}px`,
  isError: props.isError,
  hasValue: props.hasValue,
}))`
  box-sizing: padding-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${GRAY300};
  border-radius: 4px;
  padding: 12px 16px;

  &:hover {
    border: 1px solid ${GRAY500};
  }

  ${({ hasValue }) =>
    hasValue &&
    css`
      border: 1px solid ${GRAY900};
      &:hover {
        border: 1px solid ${GRAY900};
      }
    `};

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid rgba(255, 90, 0, 0.7);
      &:hover {
        border: 1px solid rgba(255, 90, 0, 0.7);
      }
    `};
`;

const Input = styled.input.attrs((props) => ({
  height: props.height,
}))`
  border: none;
  outline: none;
  height: 100%;
  width: calc(100% - 36px);
  border-radius: 4px;
  color: ${GRAY900};
  padding: 0;
  &::placeholder {
    color: ${GRAY500};
  }

  // 자동완성시 css 대체
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 500px white inset;
  }
`;

const Description = styled.p`
  margin: 0;
  position: absolute;
  bottom: -20px;
  left: 0;
  color: rgba(255, 90, 0, 0.7);
`;

const CustomTextInput = ({ id, width, height, placeholder, value, onChange, isError, disabled, maxLength, desc }) => {
  return (
    <Wrapper width={width} height={height} isError={isError} hasValue={value.length > 0}>
      <Input
        className="body-2"
        id={id}
        height={height}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
      />
      {isError && (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.7681" cy="12" r="12" fill="#FF5A00" fillOpacity="0.7" />
          <path
            d="M11.7681 17.172H14.282V14.932H11.7681V17.172ZM11.9669 13.7H14.0973L14.282 7.596V6H11.7681V7.596L11.9669 13.7Z"
            fill="white"
          />
        </svg>
      )}
      {!isError && value.length > 0 && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#111111" />
          <path
            d="M16.6666 8.27325L15.7266 7.33325L11.9999 11.0599L8.27325 7.33325L7.33325 8.27325L11.0599 11.9999L7.33325 15.7266L8.27325 16.6666L11.9999 12.9399L15.7266 16.6666L16.6666 15.7266L12.9399 11.9999L16.6666 8.27325Z"
            fill="white"
          />
        </svg>
      )}
      {desc && <Description className="caption">{desc}</Description>}
    </Wrapper>
  );
};

export default CustomTextInput;

CustomTextInput.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  desc: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
};
