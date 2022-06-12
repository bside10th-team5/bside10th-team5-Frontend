import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CalendarIcon from "../elements/Calendaricon";

const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: 216px;
  height: 50px;
  padding-left: 57px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};

  & > .icon {
    position: absolute;
    left: 18.35px;
  }

  & .react-datepicker-wrapper {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  & > button {
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.color.gray900};
  }
`;

const CustomInput = ({ value, onClick }, ref) => {
  return (
    <DatePickerWrapper onClick={onClick} ref={ref}>
      <CalendarIcon />
      <button type="button" className="react-datepicker__input-container">
        <span className="ko-body-2">{value}</span>
      </button>
    </DatePickerWrapper>
  );
};

export default forwardRef(CustomInput);

CustomInput.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
