import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { WideWrapper, Row } from "../elements/Wrapper.style";
import Gnb from "../articles/Gnb";
import { CalendarBox, CalendarTab, Section } from "./WritingPage.style";
import Footer from "../articles/Footer";
import Templates from "./templates/Templates";
import { templateListState, selectedDateState } from "../../state/writeDiaryState";
import TemplateViews from "./templates/TemplateViews";
import CustomFullCalendar from "./components/FullCalendar";
import CustomBtn from "../elements/CustomBtn";
import { ORANGE } from "../../styles/theme";
import { format } from "date-fns";
import WritePageHeader from "./components/WritePageHeader";
import OpenArrowIcon from "../elements/OpenArrowIcon";

const wrtingPage = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const templateList = useRecoilValue(templateListState);
  const openTemplateMenu = templateList.length === 0 && !toggleCalendar;
  const openMyTemplates = templateList.length > 0 && !toggleCalendar;

  const onClickSave = () => {
    console.log("저장");
  };

  const handleDate = (e) => {
    const overDate = e.date > new Date();
    if (!overDate) setSelectedDate(e.date);
  };

  const handleToggleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <WritePageHeader />
        <CalendarBox>
          <CalendarTab isOpen={toggleCalendar}>
            <span className="headline-6">{format(selectedDate, "yyyy-MM-dd")}</span>
            <div className="btn" onClick={handleToggleCalendar}>
              <span className="subtitle-1">{toggleCalendar ? "캘린더 닫기" : "캘린더 열기"}</span>
              <OpenArrowIcon color={ORANGE} rotate={toggleCalendar ? 180 : 0} />
            </div>
          </CalendarTab>
          {toggleCalendar && <CustomFullCalendar handleDate={handleDate} />}
        </CalendarBox>
        {/* // TODO : naming 변경 고민 */}
        {openTemplateMenu && <Templates />}
        {openMyTemplates && <TemplateViews />}
        {!toggleCalendar && (
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
        )}
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default wrtingPage;
