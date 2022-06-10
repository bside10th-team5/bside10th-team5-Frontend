import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import Checkbox from "../articles/Checkbox";
import RadioWithImg from "../elements/RadioWithImg";
import CustomBtn from "../elements/CustomBtn";
import { Gnb, WideWrapper } from "../elements/Wrapper.style";
import { Box, Row, Title } from "./AddProjectPage.style";
import ProjectTool from "./ProjectTool";

const AddProjectPage = () => {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const [isProjectChecked, setIsProjectChecked] = useState(true);
  const [isFreeChecked, setIsFreeChecked] = useState(false);
  const [isOngingChecked, setIsOngingChecked] = useState(false);
  const [isWebChecked, setWebChecked] = useState(true);
  const [isMobileChecked, setMobileChecked] = useState(false);

  const handleCheckBox = (e) => {
    if (e.target.id === "mobile") setMobileChecked((prev) => !prev);
    if (e.target.id === "web") setWebChecked((prev) => !prev);
    if (e.target.id === "ongoing") setIsOngingChecked((prev) => !prev);
    if (e.target.id === "projectType") setIsProjectChecked((prev) => !prev);
    if (e.target.id === "freeType") setIsFreeChecked((prev) => !prev);
  };

  const onClickSave = () => {
    //TODO: 저장하고 id 받아서 이동
    router.push("/writing/exampleid");
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
            <Checkbox
              id="projectType"
              isChecked={isProjectChecked}
              width="150px"
              marginRight="0.75rem"
              onChange={handleCheckBox}
            >
              <span className="ko-button">프로젝트형</span>
            </Checkbox>
            <Checkbox id="freeType" isChecked={isFreeChecked} width="124px" onChange={handleCheckBox}>
              <span className="ko-button">자유형</span>
            </Checkbox>
          </Box>
        </Row>
        <Row>
          <Title className="ko-headline-6">
            프로젝트 기간<span>*</span>
          </Title>
          <div>
            <span>datepicker1</span> ~ <span>datepicker2</span>
          </div>
          <Checkbox id="ongoing" isChecked={isOngingChecked} width="124px" onChange={handleCheckBox}>
            <span className="ko-button">진행중</span>
          </Checkbox>
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
