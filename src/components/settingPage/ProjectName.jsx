import React, { useState } from "react";
import RadioCheckBox from "../articles/RadioCheckBox";
import { Box, Row, Title } from "./AddProjectPage.style";

const ProjectName = () => {
  const [projectRadio, setProjectRadio] = useState("project");

  const handleRadioBox = (e) => {
    setProjectRadio(e.target.value);
  };
  return (
    <Box>
      <Title className="ko-headline-6">
        프로젝트명<span>*</span>
      </Title>
      <Row>
        <input
          style={{ border: "1px solid black", backgroundColor: "transparent", flex: 1, height: "50px" }}
          type="text"
        />
        <RadioCheckBox
          name="project-type"
          value="project"
          onChange={handleRadioBox}
          isChecked={projectRadio === "project"}
          marginRight="0.75rem"
        >
          <span className="ko-button">프로젝트형</span>
        </RadioCheckBox>
        <RadioCheckBox name="project-type" value="free" onChange={handleRadioBox} isChecked={projectRadio === "free"}>
          <span className="ko-button">자유형</span>
        </RadioCheckBox>
      </Row>
    </Box>
  );
};

export default ProjectName;
