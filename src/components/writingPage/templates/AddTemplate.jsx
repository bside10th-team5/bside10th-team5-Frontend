import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toggleAddTemplateState } from "../../../state/writeDiaryState";
import { GRAY300 } from "../../../styles/theme";
import Templates from "./Templates";
import { CancelAddTemplateBtn } from "../WritingPage.style";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${GRAY300};

  & .box {
    padding: 48px 28px;
  }
`;

const AddTemplate = () => {
  const setToggleAddTemplate = useSetRecoilState(toggleAddTemplateState);

  const handleToggleAddTemplate = () => {
    setToggleAddTemplate((prev) => !prev);
  };

  return (
    <Wrapper>
      <CancelAddTemplateBtn className="headline-6" onClick={handleToggleAddTemplate}>
        - 템플릿 추가 취소하기
      </CancelAddTemplateBtn>
      <div className="box">
        <Templates />
      </div>
    </Wrapper>
  );
};

export default AddTemplate;
