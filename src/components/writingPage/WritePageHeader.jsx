import React from "react";
import styled from "styled-components";
import { GRAY100, GRAY500, GRAY700, GRAY900, ORANGE } from "../../styles/theme";
import CustomBtn from "../elements/CustomBtn";
import { Row } from "../settingPage/AddProjectPage.style";
import { LeftBox, Title } from "./WritingPage.style";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY500};
  margin-bottom: 44px;

  & .date {
    color: ${GRAY900};
    margin-top: 4px;
  }

  & .title {
    color: ${GRAY900};
  }

  & .tag {
    color: ${GRAY700};
    background: ${GRAY100};
    border-radius: 5px;
    padding: 4px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-left: 20px;
  }
`;

const WritePageHeader = () => {
  const onClickEdit = () => {
    console.log("수정");
  };

  return (
    <HeaderWrapper>
      <LeftBox>
        <Title>
          <span className="headline-45 title">비사이드 프로젝트 회고록</span>
          <span className="body-2 tag">프로젝트형</span>
        </Title>
        <span className="subtitle-1 date">22.05.03 ~ 22.08.09</span>
      </LeftBox>
      <Row alignItems="center">
        <CustomBtn text="정보 수정하기" onClick={onClickEdit} width="157px" borderRadius="5px" color={ORANGE} />
      </Row>
    </HeaderWrapper>
  );
};

export default WritePageHeader;
