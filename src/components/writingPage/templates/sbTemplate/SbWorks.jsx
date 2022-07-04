import React, { useState } from "react";
import { Row } from "../../../settingPage/AddProjectPage.style";
import { Box, Title } from "../Templates.style";

const SbWorks = () => {
  const [works, setWorks] = useState({ myPage: "12313", admin: "123123123123" });

  const onClickTag = (name) => {
    if (Object.keys(works).includes(name)) {
      delete works[name];
    } else {
      setWorks((prev) => {
        const newWorks = { ...prev };
        newWorks[name] = "";
        return newWorks;
      });
    }
  };

  return (
    <Box>
      <Row>
        <Title className="headline-6" style={{ marginRight: "40px" }}>
          오늘 진행한 설계 업무
        </Title>
        <button onClick={(e) => onClickTag(e.currentTarget.value)} value="home">
          홈
        </button>
        <button>마이페이지</button>
        <button>전체메뉴</button>
        <button>관리자</button>
        <button>+ 추가등록</button>
      </Row>
      {Object.keys(works).length === 0 ? (
        <div style={{ width: "100%", padding: "16px", border: "1px solid black" }}>
          설계 업무 리스트 중 하나를 선택해 주세요
        </div>
      ) : (
        Object.keys(works).map((key) => (
          <div key={key}>
            <div>{key}</div>
            <input value={works[key]} type="text" />
          </div>
        ))
      )}
    </Box>
  );
};

export default SbWorks;
