import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
import { GRAY500, GRAY300 } from "../../styles/theme";

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

// placeholder 변경 가능하도록 수정

const TextareaBasic = ({placeholder}) => {
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
    <Wrapper>
      <textarea
        ref={textRef}
        rows={1}
        onKeyDown={handleKeyDown}
        className="body-2"
        placeholder={placeholder}
        value={value}
        onChange={handleTextarea}
      />
    </Wrapper>
  );
};

export default TextareaBasic;

TextareaBasic.propTypes = {
  placeholder: PropTypes.string,
}
