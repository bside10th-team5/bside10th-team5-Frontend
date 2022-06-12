import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import Checkbox from "../articles/Checkbox";
import RadioCheckBox from "../articles/RadioCheckBox";
import RadioWithImg from "../elements/RadioWithImg";
import CustomBtn from "../elements/CustomBtn";
import { Gnb, WideWrapper } from "../elements/Wrapper.style";
import { Box, Row, Title } from "./AddProjectPage.style";
import ProjectTool from "./ProjectTool";
import ProjectDate from "./ProjectDate";

const AddProjectPage = () => {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const [projectRadio, setProjectRadio] = useState("project");
  const [isWebChecked, setWebChecked] = useState(true);
  const [isMobileChecked, setMobileChecked] = useState(false);

  const handleRadioBox = (e) => {
    setProjectRadio(e.target.value);
  };

  const handleCheckBox = (e) => {
    if (e.target.id === "mobile") setMobileChecked((prev) => !prev);
    if (e.target.id === "web") setWebChecked((prev) => !prev);
  };

  const onClickSave = () => {
    //TODO: 저장하고 id 받아서 이동
    router.push("/writing/[id]", "/writing/exampleid");
  };

  const onClickLogout = () => {
    router.push("/");
  };

  return (
    <WideWrapper>
      <Gnb isVisible>
        <div>로고</div>
        <div onClick={onClickLogout}>로그아웃</div>
      </Gnb>
      <section style={{ marginTop: "7rem" }}>
        <Row>
          <Title className="ko-headline-6">
            프로젝트명<span>*</span>
          </Title>
          <Box>
            <input style={{ border: "none", backgroundColor: "transparent", flex: 1, height: "50px" }} type="text" />
            <RadioCheckBox
              name="project-type"
              value="project"
              onChange={handleRadioBox}
              isChecked={projectRadio === "project"}
              marginRight="0.75rem"
            >
              <span className="ko-button">프로젝트형</span>
            </RadioCheckBox>
            <RadioCheckBox
              name="project-type"
              value="free"
              onChange={handleRadioBox}
              isChecked={projectRadio === "free"}
            >
              <span className="ko-button">자유형</span>
            </RadioCheckBox>
          </Box>
        </Row>
        <Row>
          <ProjectDate />
        </Row>
        <Row>
          <Title className="ko-headline-6">프로젝트 기본 정보(한번 등록하면 회고록 작성을 쉽게할 수 있어요)</Title>
          <Box>
            <span>프로젝트 유형</span>
            <Checkbox id="web" isChecked={isWebChecked} width="133px" marginRight="0.75rem" onChange={handleCheckBox}>
              <span className="ko-button">웹 (web)</span>
            </Checkbox>
            <Checkbox id="mobile" isChecked={isMobileChecked} width="174px" onChange={handleCheckBox}>
              <span className="ko-button">모바일 (Mobile)</span>
            </Checkbox>
          </Box>
          <ProjectTool />
        </Row>
        <Row>
          <Title className="ko-headline-6">
            썸네일 이미지 선택<span>*</span>
          </Title>
          <Box>
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
          </Box>
        </Row>
        <CustomBtn
          text="회고록 생성"
          onClick={onClickSave}
          width="399px"
          height="50px"
          borderRadius="5px"
          bgColor={themeContext.color.orange}
        />
      </section>
    </WideWrapper>
  );
};

export default AddProjectPage;
