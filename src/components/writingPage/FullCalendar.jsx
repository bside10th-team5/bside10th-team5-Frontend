import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CustomFullCalendar = () => {
  const [events, setEvents] = React.useState([
    { title: "event 1", date: "2022-06-04" },
    { title: "event 2", date: "2022-05-31" },
  ]);

  const injectDayCell = (arg) => {
    return (
      <div style={{ border: "2px solid yellow", width: "100%", height: "100%" }}>
        <div>{arg.dayNumberText}</div>
        <div>asdfas</div>
      </div>
    );
  };

  const injectSlot = () => {
    return (
      <div style={{ border: "2px solid green", width: "100%", height: "100%" }}>
        <div>asdfas</div>
      </div>
    );
  };

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    return (
      <div className="event-text">
        <b style={{ height: "100%" }}>{eventInfo.timeText}asdfasf</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid black", width: "100%" }}>
      <FullCalendar
        editable={true}
        customButtons={{
          customToday: { text: `${new Date()}` },
        }}
        eventClick={function () {
          alert("asdfasfd");
        }}
        headerToolbar={{ start: "customToday", center: "", end: "prev,next" }}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          const data = prompt("뭐추가할래");
          if (data) {
            console.log("adsfa");
            setEvents((prev) => prev.concat({ title: data, date: e.dateStr }));
          }
        }}
        contentHeight={400}
        aspectRatio={2}
        // dayHeaderContent={<div style={{ border: '2px solid green' }}>tkqkasdkfjal</div>}
        dayHeaderClassNames="calendar-header"
        dayCellContent={injectDayCell}
        slotLabelContent={injectSlot}
        stickyHeaderDates={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
};

export default CustomFullCalendar;
