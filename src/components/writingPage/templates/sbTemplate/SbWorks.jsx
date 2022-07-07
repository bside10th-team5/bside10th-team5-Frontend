import React, { useState } from "react";
import styled from "styled-components";
import { GRAY300, GRAY500 } from "../../../../styles/theme";
import TitleTextarea from "../../../articles/TitleTextarea";
import { Column, Row } from "../../../settingPage/AddProjectPage.style";
import { Box, PageTag, Title } from "../Templates.style";

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

const SbWorks = () => {
  // const [works, setWorks] = useState({ myPage: "12313", admin: "123123123123" });
  const [tagList, setTagList] = useState(["홈", "마이페이지", "전체메뉴", "관리자"]);
  const [works, setWorks] = useState({});

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

  return (
    <SbWroksWrapper>
      <Row alignItems="center">
        <Title className="headline-6" style={{ marginRight: "40px", minWidth: "193px" }}>
          오늘 진행한 설계 업무
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
              const tagName = prompt("추가등록");
              setTagList((prev) => prev.concat(tagName));
            }}
          >
            + 추가등록
          </span>
        </Row>
      </Row>
      {Object.keys(works).length === 0 ? (
        <div className="body-2 empty-box">오늘 작업한 설계 업무 내용 중 하나를 선택해 주세요</div>
      ) : (
        <Column gap="16px">
          {Object.keys(works).map((key) => (
            <TitleTextarea
              key={key}
              title={key}
              placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
              text={works[key]}
              handleClose={handleCloseTag}
            >
              <PageTag className="button" colorCase={(tagList.indexOf(key) % 4) + 1}>
                {key}
              </PageTag>
            </TitleTextarea>
          ))}
        </Column>
      )}
    </SbWroksWrapper>
  );
};

export default SbWorks;
