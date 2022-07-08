import React, { useRef } from "react";
import PropTypes from "prop-types";
import FullCalendar, { addDays } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { format } from "date-fns";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  padding-top: 20px;

  // 타이틀 부분 css 자리
  & .fc-toolbar-chunk > div {
    display: flex;
    gap: 20px;
  }

  // 미래일 css 자리
  & .fc-day-future {
    border: 2px solid red;
  }
`;

const CustomFullCalendar = ({ handleDate }) => {
  const ref = useRef();
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents([
      { title: "개발관련", date: "2022-06-04" },
      { title: "qa", date: "2022-06-04" },
      { title: "설계", date: "2022-06-04" },
      { title: "event 2", date: "2022-05-31" },
      { title: "event 2", date: format(new Date(), "yyyy-MM-dd") },
      { title: "와우", date: "2022-06-30" },
      { title: "와우", date: "2022-06-30" },
    ]);
  }, []);

  const injectDayCell = (arg) => {
    const overDate = arg.date > new Date();
    if (overDate) {
      return (
        <div style={{ border: "2px solid yellow", width: "100%", height: "100px" }}>
          <div>{arg.dayNumberText}</div>
        </div>
      );
    }

    return (
      <div style={{ border: "", width: "", height: "" }}>
        <div>{arg.dayNumberText}</div>
      </div>
    );
  };

  const injectSlot = () => {
    return (
      <div style={{ border: "2px solid red", width: "100%", height: "100%" }}>
        <div>123</div>
      </div>
    );
  };

  function renderEventContent(eventInfo) {
    return (
      <div className="event-text" style={{ border: "5px solid green" }}>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }

  return (
    <Wrapper>
      <FullCalendar
        ref={ref}
        locale="ko"
        editable={true}
        selectable={true}
        // selectMirror={true}
        // customButtons={{
        //   customToday: { text: `${new Date()} 월` },
        // }}
        eventClick={function () {
          alert("이벤트 클릭함수");
        }}
        headerToolbar={{ start: "", center: "prev,title,next", end: "" }}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        // dateClick={(e) => {
        //   const data = prompt("뭐추가할래, 데이클릭함수");
        //   if (data) {
        //     setEvents((prev) => prev.concat({ title: data, date: e.dateStr }));
        //   }
        // }}
        dateClick={handleDate}
        contentHeight={450}
        aspectRatio={2}
        // select={(e) => {
        //   return false;
        // }}
        selectAllow={(e) => {
          if (e.end > addDays(new Date(), 1)) return false;
          if (e.start > new Date()) return false;
          return true;
        }}
        weekends={true}
        // dayHeaderContent={<div style={{ border: '2px solid green' }}>tkqkasdkfjal</div>}
        dayHeaderClassNames="calendar-header"
        dayCellContent={injectDayCell}
        // dayHeaderContent={injectDayCell}
        // dayCellDidMount={injectDayCell}
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
