import React, { useRef } from "react";
import PropTypes from "prop-types";
import FullCalendar, { addDays } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { format } from "date-fns";
import { BLUE, GREEN, ORANGE, YELLOW } from "../../../styles/theme";
import { CalendarWrapper } from "./FullCalendar.style";

const CustomFullCalendar = ({ handleDate }) => {
  const ref = useRef();
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents([
      { title: "워크플로우", date: "2022-06-04" },
      { title: "QA", date: "2022-06-04" },
      { title: "설계", date: "2022-06-04" },
      { title: "IA", date: "2022-05-31" },
      { title: "워크플로우", date: format(new Date(), "yyyy-MM-dd") },
      { title: "설계", date: "2022-06-30" },
      { title: "자유형", date: "2022-07-04" },
      { title: "개발관련", start: "2022-07-05", end: "2022-07-07" },
      { title: "디자인관련", start: "2022-07-05", end: "2022-07-11" },
      { title: "설계", date: "2022-07-11" },
    ]);
  }, []);

  const injectDayCell = (arg) => {
    // const overDate = arg.date > new Date();
    // if (overDate) {
    //   return (
    //     <div style={{ border: "2px solid yellow", width: "100%", height: "100px" }}>
    //       <div>{arg.dayNumberText}</div>
    //     </div>
    //   );
    // }

    return (
      <div style={{ border: "", width: "", height: "" }}>
        <div>{arg.dayNumberText.slice(0, -1)}</div>
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
    const getColor = (title) => {
      if (title === "워크플로우") return GREEN;
      if (title === "QA") return BLUE;
      if (title === "IA") return GREEN;
      if (title === "설계") return ORANGE;
      if (title === "자유형") return BLUE;
      if (title === "개발관련") return YELLOW;
      if (title === "디자인관련") return GREEN;
    };
    return (
      <div
        className="button"
        style={{
          margin: "0 10px",
          borderRadius: "50px",
          padding: "0 12px",
          backgroundColor: getColor(eventInfo.event.title),
        }}
      >
        <span>{eventInfo.event.title}</span>
      </div>
    );
  }

  return (
    <CalendarWrapper>
      <FullCalendar
        ref={ref}
        locale="ko"
        editable={true}
        selectable={true}
        // selectMirror={true}
        // customButtons={{
        //   prevb: { text: "버튼" },
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
        contentHeight={688}
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
        dayHeaderContent={(e) => {
          return <div className="inject-day-header caption">{e.text}</div>;
        }}
        dayHeaderClassNames="calendar-header"
        dayCellContent={injectDayCell}
        // dayHeaderContent={injectDayCell}
        // dayCellDidMount={injectDayCell}
        slotLabelContent={injectSlot}
        stickyHeaderDates={true}
        events={events}
        eventContent={renderEventContent}
      />
    </CalendarWrapper>
  );
};

export default CustomFullCalendar;

CustomFullCalendar.propTypes = {
  // date: PropTypes.instanceOf(Date),
  handleDate: PropTypes.func,
};
