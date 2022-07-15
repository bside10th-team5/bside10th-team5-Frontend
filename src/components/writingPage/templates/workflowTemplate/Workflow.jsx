import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GRAY300, GRAY500 } from "../../../../styles/theme";
import { Box, Title } from "../Templates.style";

const Wrapper = styled.div.attrs((props) => ({ textareaHeight: props.textareaHeight }))`
  position: relative;
  flex: 1;
  width: 100%;
  height: auto;
  min-height: 58px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${GRAY300};

  & textarea {
    resize: none;
    height: auto;
    overflow: visible;
    width: 100%;
    padding: 0;
    min-height: ${(props) => props.textareaHeight};
    outline: none;
    border: none;
    color: ${GRAY500};
  }
`;

const Workflow = () => {
  const [value, setValue] = useState("");
  const textRef = useRef(null);
  const handleKeyDown = (e) => {
    const target = e.target;
    textRef.current.style.height = "24px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  };

  const handleTextarea = (e) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <Title className="headline-6">오늘 진행한 워크플로우 업무</Title>
      <Wrapper>
        <textarea
          ref={textRef}
          rows={1}
          onKeyDown={handleKeyDown}
          className="body-2"
          placeholder="메인화면부터 결제화면까지의 사용자 워크플로우 제작"
          value={value}
          onChange={handleTextarea}
        />
      </Wrapper>
    </Box>
  );
};

export default Workflow;
