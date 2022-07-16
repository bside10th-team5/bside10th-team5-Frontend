import React, { useState } from "react";
import styled from "styled-components";
import { GRAY700 } from "../../../../styles/theme";
import TextareaTitle from "../../../articles/TextareaTitle";
import { Box, Title } from "../Templates.style";
import { Row } from "../../../elements/Wrapper.style";

const Wrapper = styled(Box)`
  & .subtitle {
    margin: 0 0 34px 12px;
    color: ${GRAY700};
  }
`;

const SbGoal = () => {
  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");

  const onChangeGoal1 = (e) => {
    setGoal1(e.target.value);
  };
  const onChangeGoal2 = (e) => {
    setGoal2(e.target.value);
  };

  return (
    <Wrapper>
      <Row alignItems="flex-end">
        <Title className="headline-6">설계목표</Title>
        <span className="caption subtitle">과거에 입력한 정보를 불러와요 (업데이트 시 전체 설계 목표에 반영)</span>
      </Row>
      <Row gap="1rem">
        <TextareaTitle
          title="사용자 편의성 측면"
          placeholder="서비스 기획자를 대상으로한 회고록 서비스 입니다.&#13;&#10;ex) 쉬운 회고록 템플릿 제시하여 회고 습관 형성"
          text={goal1}
          textareaHeight="100px"
          handleTextarea={onChangeGoal1}
        />
        <TextareaTitle
          title="사용자 편의성 측면"
          placeholder="서비스 기획자를 대상으로한 회고록 서비스 입니다.&#13;&#10;ex) 쉬운 회고록 템플릿 제시하여 회고 습관 형성"
          text={goal2}
          textareaHeight="100px"
          handleTextarea={onChangeGoal2}
        />
      </Row>
    </Wrapper>
  );
};

export default SbGoal;
