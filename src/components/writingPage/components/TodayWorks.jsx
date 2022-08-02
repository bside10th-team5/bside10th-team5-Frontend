import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GRAY300, GRAY500 } from "../../../styles/theme";
import TextareaTitle from "../../articles/TextareaTitle";
import { Box, PageTag, Title } from "../templates/Templates.style";
import { Row, Column } from "../../elements/Wrapper.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalListState } from "../../../state/modalState";
import { sbWorkTagState } from "../../../state/sbTemplateState";

const SbWroksWrapper = styled(Box)`
  & .empty-box {
    width: 100%;
    padding: 16px;
    color: ${GRAY500};
    border: 1px solid ${GRAY300};
    border-radius: 4px;
  }

  & .tag-box {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  & .add-tag {
    color: ${GRAY500};
    margin-left: 20px;
    cursor: pointer;
    min-width: 68px;
  }
`;

const TodayWorks = ({ title }) => {
  // const [works, setWorks] = useState({ myPage: "12313", admin: "123123123123" });
  const [tagList, setTagList] = useRecoilState(sbWorkTagState);
  const [works, setWorks] = useState({});
  const setModalList = useSetRecoilState(modalListState);

  const onClickTag = (name) => {
    if (!Object.keys(works).includes(name)) {
      setWorks((prev) => {
        const newWorks = { ...prev };
        newWorks[name] = "";
        return newWorks;
      });
    } 
  };

  const handleCloseTag = (name) => {
    setWorks((prev) => {
      const newWorks = { ...prev };
      delete newWorks[name];
      return newWorks;
    });
  };

  const AddTagCallback = (tagName) => {
    if (!tagList.includes(tagName)) {
      setTagList((prev) => prev.concat(tagName));
    }
  };

  return (
    <SbWroksWrapper>
      <Row alignItems='center'>
        <Title className="headline-6" style={{ marginRight: "40px", minWidth: "193px" }}>
          {title}
        </Title>
        <Row marginBottom="28px">
          <div className="tag-box">
            {tagList.map((key, i) => (
              <PageTag
                key={key}
                className="button"
                onClick={(e) => onClickTag(e.currentTarget.value)}
                value={key}
                colorCase={(i % 4) + 1}
              >
                {key}
              </PageTag>
            ))}
          </div>
          <span
            className="body-2 add-tag"
            style={{}}
            onClick={() => {
              setModalList((prev) => prev.concat({ id: "add-today-work-modal", callback: AddTagCallback }));
            }}
          >
            + 추가등록
          </span>
        </Row>
        {/* <Row marginBottom="28px" alignItems='right'>
          <span className="body-2">추가항목 펼치기</span>
        </Row> */}


      </Row>
      {Object.keys(works).length === 0 ? (
        <div className="body-2 empty-box">오늘 작업한 설계 업무 내용 중 하나를 선택해 주세요</div>
      ) : (
        <Column gap="16px">
          {Object.keys(works).map((key) => (
            <TextareaTitle
              key={key}
              title={key}
              placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
              text={works[key]}
              handleClose={handleCloseTag}
            >
              <PageTag className="button" colorCase={(tagList.indexOf(key) % 4) + 1}>
                {key}
              </PageTag>
            </TextareaTitle>
          ))}
        </Column>
      )}
    </SbWroksWrapper>
  );
};

export default TodayWorks;

TodayWorks.propTypes = {
  title: PropTypes.string,
};
