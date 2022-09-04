import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { format } from "date-fns";
import { WideWrapper, Row } from "../elements/Wrapper.style";
import Gnb from "../articles/Gnb";
import { CalendarBox, CalendarTab, Section } from "./WritingPage.style";
import Footer from "../articles/Footer";
import Templates from "./templates/Templates";
import { templateListState, selectedDateState, useHandleTemplate } from "../../state/writeDiaryState";
import TemplateViews from "./templates/TemplateViews";
import CustomFullCalendar from "./components/FullCalendar";
import CustomBtn from "../elements/CustomBtn";
import { ORANGE } from "../../styles/theme";
import WritePageHeader from "./components/WritePageHeader";
import OpenArrowIcon from "../elements/OpenArrowIcon";

const wrtingPage = () => {
  const id = useRouter().query.id;
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [templateList, setTemplateList] = useRecoilState(templateListState);
  const openTemplateMenu = templateList.length === 0 && !toggleCalendar;
  const openMyTemplates = templateList.length > 0 && !toggleCalendar;
  const { saveRetrospective, fetchRetrospective } = useHandleTemplate();
  const { data } = useQuery(["retroSpective", id], fetchRetrospective, {
    select: (data) => {
      const { board, retrospective } = data.data;
      return {
        boardInfo: { ...board, type: board.projectType === "PROJECT" ? "프로젝트형" : "자유형" },
        retroList: retrospective.map((el) => {
          if (el.retrospectiveType === "FREESTYLE")
            return { id: el.id, type: el.retrospectiveType, content: "123", date: el.retrospectiveDate };
          return el;
        }),
      };
    },
  });

  const onClickSave = () => {
    saveRetrospective(id); //use query 로 변경해야댐
  };

  const handleDate = (e) => {
    const overDate = e.date > new Date();
    if (!overDate) setSelectedDate(e.date);
  };

  const handleToggleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  useEffect(() => {
    if (data) {
      const date = format(selectedDate, "yyyy-MM-dd");
      const sortedList = data.retroList.filter((retro) => retro.date === date);
      setTemplateList(sortedList);
    }
  }, [selectedDate, data]);

  if (!data) {
    return null;
  }

  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <WritePageHeader
          title={data.boardInfo.title}
          type={data.boardInfo.type}
          toDate={data.boardInfo.toDate}
          fromDate={data.boardInfo.fromDate}
        />
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
