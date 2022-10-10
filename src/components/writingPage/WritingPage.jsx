import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
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
import { format } from "date-fns";
import WritePageHeader from "./components/WritePageHeader";
import OpenArrowIcon from "../elements/OpenArrowIcon";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { parseTemplateType } from "../../utills/parser";

const wrtingPage = () => {
  const id = useRouter().query.id;
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [templateList, setTemplateList] = useRecoilState(templateListState);
  const openTemplateMenu = templateList.length === 0 && !toggleCalendar;
  const openMyTemplates = templateList.length > 0 && !toggleCalendar;

  const { saveRetrospective, getRetrospective } = useHandleTemplate();
  const { data } = useQuery(["templateList", id], getRetrospective);

  const onClickSave = () => {
    saveRetrospective(id); //board 정보 받으면 수정해야됨
  };

  const handleDate = (e) => {
    const overDate = e.date > new Date();
    if (!overDate) setSelectedDate(e.date);
  };

  const handleToggleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  const parseTemplate = (_data) => {
    const parsedData = {
      id: _data.id,
      type: parseTemplateType(_data.retrospectiveType),
      content: _data.contentAsString, //TODO: 파싱해야댐
    };
    return parsedData;
  };

  useEffect(() => {
    if (data) {
      setTemplateList((prev) => {
        const newList = [...prev];
        const idList = newList.map((el) => el.id);
        for (let i = 0; i < data.length; i++) {
          if (!idList.includes(data[i].id)) {
            newList.push(parseTemplate(data[i]));
          }
        }
        // console.log(newList, "newList");
        return newList;
      });
      console.log(templateList, "templateList");
    }
  }, [data]);

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
