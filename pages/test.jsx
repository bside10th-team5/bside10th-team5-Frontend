import React from "react";
import TestCalendar from "../src/components/testCalendar";

const test = () => {
  const [isOpenCalendar, setIsOpenCalendar] = React.useState(false);

  return (
    <>
      <div style={{ border: "1px solid green" }} onClick={() => setIsOpenCalendar((prev) => !prev)}>
        test
      </div>
      {isOpenCalendar && <TestCalendar />}
    </>
  );
};

export default test;
