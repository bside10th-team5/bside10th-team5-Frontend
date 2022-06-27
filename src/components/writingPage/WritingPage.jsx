import React, { useState } from "react";
// import { useRouter } from "next/router";
import { WideWrapper } from "../elements/Wrapper.style";
import Gnb from "../articles/Gnb";
import { CalendarBox, CalendarTab, Header, HeaderWrapper, Section, Title } from "./WritingPage.style";
import Footer from "../articles/Footer";
import Templates from "./Templates";
import { useRecoilValue } from "recoil";
import { templateListState } from "../../state/writeDiaryState";
import TemplateViews from "./TemplateViews";
import CustomFullCalendar from "./FullCalendar";
import { Row } from "../settingPage/AddProjectPage.style";
import CustomBtn from "../elements/CustomBtn";
import { ORANGE } from "../../styles/theme";

const wrtingPage = () => {
  // const router = useRouter();
  // const { id } = router.query;
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const templateList = useRecoilValue(templateListState);

  const onClickSave = () => {
    console.log("저장");
  };

  const handleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <HeaderWrapper>
          <Header>
            <Title style={{ display: "flex" }}>
              <span className="headline-45 title">비사이드 프로젝트 회고록</span>
              <span className="body-2 tag">프로젝트형</span>
            </Title>
            <span className="subtitle-1 date">22.05.03 ~ 22.08.09</span>
          </Header>
          <Row alignItems="center">
            <CustomBtn text="정보 수정하기" onClick={onClickSave} width="157px" borderRadius="5px" color={ORANGE} />
          </Row>
        </HeaderWrapper>
        <CalendarBox>
          <CalendarTab>
            <span className="headline-6">22년 06월 15일</span>
            <span className="subtitle-1 btn" onClick={handleCalendar}>
              {toggleCalendar ? "캘린더 닫기" : "캘린더 열기"}
            </span>
          </CalendarTab>
          {toggleCalendar && <CustomFullCalendar />}
        </CalendarBox>
        {templateList.length === 0 && <Templates />}
        {templateList.length > 0 && <TemplateViews />}
        <Row justifyContent="center">
          <CustomBtn
            text="저장하기"
            onClick={onClickSave}
            width="399px"
            borderRadius="5px"
            bgColor={ORANGE}
            margin="52px 0 0 0"
          />
        </Row>
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default wrtingPage;
