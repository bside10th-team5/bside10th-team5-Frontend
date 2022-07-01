import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import CalendarIcon from "../elements/Calendaricon";
import { INPUT_H } from "../../styles/theme";

// TODO: datepicker custom 해서 폴더 article 로 이동해놔야됌
const CustomInputWrapper = styled.div.attrs((props) => ({
  disabled: props.disabled || false,
}))`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: auto;
  height: ${INPUT_H}px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  padding: 12px 16px;

  & > .icon {
    margin-right: 12px;
  }

  & > button {
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.gray900};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border: ${({ theme }) => `1px solid ${theme.color.gray500}`};
      background-color: ${({ theme }) => theme.color.gray100};

      & > button {
        color: ${({ theme }) => theme.color.gray500};
      }
    `}
`;

const CustomInput = ({ value, onClick, disabled }, ref) => {
  return (
    <CustomInputWrapper onClick={onClick} ref={ref} disabled={disabled}>
      <CalendarIcon />
      <button type="button" className="body-2">
        {value}
      </button>
    </CustomInputWrapper>
  );
};

// @ts-ignore
export default forwardRef(CustomInput);

CustomInput.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
