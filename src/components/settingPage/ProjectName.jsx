import React from "react";
import { useRecoilState } from "recoil";
import { boardNameState, boardTypeState } from "../../state/addProjectState";
import RadioCheckBox from "../articles/RadioCheckBox";
import CustomTextInput from "../elements/CustomTextInput";
import { Box, Title } from "./AddProjectPage.style";
import { Row } from "../elements/Wrapper.style";

const ProjectName = () => {
  const [projectRadio, setProjectRadio] = useRecoilState(boardTypeState);
  const [projectName, setProjectName] = useRecoilState(boardNameState);

  const onChangeTextInput = (e) => {
    setProjectName(e.target.value);
  };

  const handleRadioBox = (e) => {
    setProjectRadio(e.target.value);
  };

  return (
    <Box>
      <Title className="headline-6">
        프로젝트명 <span>*</span>
      </Title>
      <Row>
        <CustomTextInput
          id="project-name"
          placeholder="비사이드 왓헤픈 (서비스기획자를 위한 회고록 서비스)"
          value={projectName}
          onChange={onChangeTextInput}
          width="632px"
          desc={projectName.length > 24 ? "25자 이상은 입력할 수 없어요" : ""}
          isError={projectName.length > 24}
        />
        <RadioCheckBox
          name="project-type"
          value="project"
          onChange={handleRadioBox}
          isChecked={projectRadio === "project"}
          marginLeft="26px"
          marginRight="1rem"
        >
          <span className="button">프로젝트형</span>
        </RadioCheckBox>
        <RadioCheckBox name="project-type" value="free" onChange={handleRadioBox} isChecked={projectRadio === "free"}>
          <span className="button">자유형</span>
        </RadioCheckBox>
      </Row>
    </Box>
  );
};

export default ProjectName;
