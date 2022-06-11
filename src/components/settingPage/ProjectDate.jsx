import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "../articles/Checkbox";
import { Box, Title } from "./AddProjectPage.style";
import CustomInput from "./CustomInput";

const ProjectDate = () => {
  const [isOngingChecked, setIsOngingChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleCheckBox = (e) => {
    if (e.target.id === "ongoing") setIsOngingChecked((prev) => !prev);
  };

  return (
    <Box>
      <Title className="ko-headline-6">
        프로젝트 기간<span>*</span>
      </Title>
      <div style={{ display: "flex" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="ko"
          customInput={<CustomInput />}
          dateFormat="yyyy-MM-dd"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput />}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <Checkbox id="ongoing" isChecked={isOngingChecked} width="124px" onChange={handleCheckBox}>
        <span className="ko-button">진행중</span>
      </Checkbox>
    </Box>
  );
};

export default ProjectDate;
