import React from "react";
import PropTypes from "prop-types";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  padding-top: 20px;

  // 타이틀 부분 css 자리
  & .fc-toolbar-chunk > div {
    display: flex;
    gap: 20px;
  }
`;

const CustomFullCalendar = ({ handleDate }) => {
  const [events, setEvents] = React.useState([
    { title: "개발관련", date: "2022-06-04" },
    { title: "qa", date: "2022-06-04" },
    { title: "설계", date: "2022-06-04" },
    { title: "event 2", date: "2022-05-31" },
  ]);

  const injectDayCell = (arg) => {
    const overDate = arg.date > new Date();

    if (overDate) {
      return (
        <div style={{ border: "2px solid yellow", width: "100%", height: "100%" }}>
          <div>{arg.dayNumberText}</div>
          <div>blocking</div>
        </div>
      );
    }

    return (
      <div style={{ border: "2px solid yellow", width: "100%", height: "100%" }}>
        <div>{arg.dayNumberText}</div>
        {/* <div>asdfas</div> */}
      </div>
    );
  };

  const injectSlot = () => {
    return (
      <div style={{ border: "2px solid green", width: "100%", height: "100%" }}>
        <div>123</div>
      </div>
    );
  };

  function renderEventContent(eventInfo) {
    return (
      <div className="event-text">
        <i>{eventInfo.event.title}</i>
        <b style={{ height: "100%" }}>{eventInfo.timeText}</b>
      </div>
    );
  }

  return (
    <Wrapper>
      <FullCalendar
        timeZone=""
        locale="ko"
        editable={true}
        customButtons={{
          customToday: { text: `${new Date()} 월` },
        }}
        eventClick={function () {
          alert("이벤트 클릭함수");
        }}
        headerToolbar={{ start: "", center: "prev,title,next", end: "" }}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        // dateClick={(e) => {
        //   const data = prompt("뭐추가할래, 데이클릭함수");
        //   if (data) {
        //     console.log("adsfa");
        //     setEvents((prev) => prev.concat({ title: data, date: e.dateStr }));
        //   }
        // }}
        dateClick={handleDate}
        contentHeight={350}
        aspectRatio={2}
        // dayHeaderContent={<div style={{ border: '2px solid green' }}>tkqkasdkfjal</div>}
        dayHeaderClassNames="calendar-header"
        dayCellContent={injectDayCell}
        slotLabelContent={injectSlot}
        stickyHeaderDates={true}
        events={events}
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
};

export default CustomFullCalendar;

CustomFullCalendar.propTypes = {
  // date: PropTypes.instanceOf(Date),
  handleDate: PropTypes.func,
};
