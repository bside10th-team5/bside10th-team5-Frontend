import styled from "styled-components";
import { GRAY900, WHITE, GRAY700 } from "../../../styles/theme";

export const CalendarWrapper = styled.div`
  position: relative;
  background-color: ${GRAY900};
  padding: 0 26px 20px 26px;
  width: 100%;
  font: normal normal 200 12px/20px SCoreMontserrat;
  letter-spacing: 0.4px;
  border: none;

  // 타이틀 부분 css 자리
  & .fc-toolbar-chunk > div {
    display: flex;
    gap: 20px;
  }

  //상단 툴바
  & .fc-header-toolbar {
    border: 1px solid yellow;
    position: absolute;
    background-color: white;
    top: -50px;
    left: 500px;
    // display: none;
  }

  // 테두리 관련 css
  & .fc-scrollgrid-section > td,
  th {
    border: none;
  }
  & .fc-view,
  .fc-scrollgrid {
    border: none;
  }
  & .calendar-header {
    border: 1px solid #111111;
  }
  & .fc-daygrid-day {
    border: 1px solid #111111;
  }

  // 헤더박스
  & .calendar-header .fc-scrollgrid-sync-inner {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #242424;
  }

  // 데이박스
  & .fc-daygrid-day .fc-scrollgrid-sync-inner {
    background-color: #242424;
    min-height: 132px;
    // padding-top: 8px;
    // padding-right: 8px;
  }

  // 요일 헤더
  & .inject-day-header {
    color: ${WHITE};
  }

  // 일 데이
  & .fc-daygrid-day-number {
    color: ${WHITE};
    width: 16px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    margin-right: 8px;
    margin-bottom: 10px;
  }

  // 다른달 의 일
  & .fc-day-other .fc-daygrid-day-number {
    color: ${GRAY700};
  }

  // 미래일 css 자리
  & .fc-day-future {
    // border: 2px solid red;
  }

  & .fc-h-event {
    background: none;
    border: none;
    // border-radius: 50px;
    // background-color: red;
    // display: none;
  }
`;
