// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";
import { projectStartDateState, projectEndDateState } from "../../state/addProjectState";
import ToggleCheckbox from "../articles/ToggleCheckbox";
import CustomInput from "./CustomInput";
import { Row, Box, Title } from "./AddProjectPage.style";

const DatePickerWrapper = styled.div``;

const ProjectDate = () => {
  const [isOngingChecked, setIsOngingChecked] = useState(true);

  const [startDate, setStartDate] = useRecoilState(projectStartDateState);
  const [endDate, setEndDate] = useRecoilState(projectEndDateState);

  const handleCheckBox = (e) => {
    if (e.target.id === "ongoing") setIsOngingChecked((prev) => !prev);
  };

  return (
    <Box>
      <Title className="headline-6">
        프로젝트 기간<span>*</span>
      </Title>
      <Row>
        <DatePickerWrapper>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput />}
            dateFormat="yyyy-MM-dd"
          />
        </DatePickerWrapper>
        <span style={{ margin: "0 16px" }}>~</span>
        <DatePickerWrapper>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            customInput={<CustomInput disabled />}
            dateFormat="yyyy-MM-dd"
            disabled={isOngingChecked}
          />
        </DatePickerWrapper>
        <ToggleCheckbox id="ongoing" isChecked={isOngingChecked} width="124px" onChange={handleCheckBox}>
          <span className="button">진행중</span>
        </ToggleCheckbox>
      </Row>
    </Box>
  );
};

export default ProjectDate;
