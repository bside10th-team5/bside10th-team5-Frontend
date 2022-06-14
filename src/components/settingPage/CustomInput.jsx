import React, { forwardRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CalendarIcon from "../elements/Calendaricon";

// TODO: datepicker custom 해서 폴더 article 로 이동해놔야됌
const CustomInputWrapper = styled.div`
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
    <CustomInputWrapper onClick={onClick} ref={ref}>
      <CalendarIcon />
      <button type="button">
        <span className="ko-body-2">{value}</span>
      </button>
    </CustomInputWrapper>
  );
};

// @ts-ignore
export default forwardRef(CustomInput);

CustomInput.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
