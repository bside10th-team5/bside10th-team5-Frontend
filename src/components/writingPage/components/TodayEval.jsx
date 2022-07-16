import React, { useState } from "react";
import FaceNormalIcon from "../../elements/FaceNormalIcon";
import FaceSadIcon from "../../elements/FaceSadIcon";
import FaceSmileIcon from "../../elements/FaceSmileIcon";
import StarIcon from "../../elements/StarIcon";
import { Row } from "../../elements/Wrapper.style";
import { Box, Title } from "../templates/Templates.style";

const TodayEval = () => {
  const [total, setTotal] = useState(1);
  const [myStatus, setMyStatus] = useState("smile");

  const handleTotal = (e) => {
    console.log(e.currentTarget.value);
    setTotal(Number(e.currentTarget.value));
  };

  return (
    <Box marginBottom="0">
      <Title className="headline-6">오늘의 업무평가</Title>
      <Row>
        <span className="subtitle-1" style={{ marginRight: "36px" }}>
          총점
        </span>
        <span style={{ display: "flex", gap: "12px" }}>
          <StarIcon value={1} onClick={handleTotal} isActive={total >= 1} />
          <StarIcon value={2} onClick={handleTotal} isActive={total >= 2} />
          <StarIcon value={3} onClick={handleTotal} isActive={total >= 3} />
          <StarIcon value={4} onClick={handleTotal} isActive={total >= 4} />
          <StarIcon value={5} onClick={handleTotal} isActive={total >= 5} />
        </span>
        <span className="subtitle-1" style={{ marginRight: "36px", marginLeft: "60px" }}>
          기분
        </span>
        <span style={{ display: "flex", gap: "32px" }}>
          <button onClick={() => setMyStatus("smile")}>
            <FaceSmileIcon isActive={myStatus === "smile"} />
          </button>
          <button onClick={() => setMyStatus("normal")}>
            <FaceNormalIcon isActive={myStatus === "normal"} />
          </button>
          <button onClick={() => setMyStatus("sad")}>
            <FaceSadIcon isActive={myStatus === "sad"} />
          </button>
        </span>
      </Row>
    </Box>
  );
};

export default TodayEval;
