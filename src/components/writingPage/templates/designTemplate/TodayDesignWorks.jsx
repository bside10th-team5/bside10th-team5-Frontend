import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GRAY300, GRAY500 } from "../../../../styles/theme";
import TitleTextarea from "../../../articles/TextareaTitle";
import { Box, PageTag, Title } from "../Templates.style";
import { Row, Column } from "../../../elements/Wrapper.style";
// import { UploadBox } from "../Templates.style";

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

const TodayDesignWorks = ({ title }) => {
  const [tagList, setTagList] = useState(["디자인 미팅", "디자인 일정관리", "UXUI 리서치", "UX WRITING"]);
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
    <>
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
              const tagName = prompt("추가등록");
              setTagList((prev) => prev.concat(tagName));
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
    <span className="headline-6">디자인 업무 이미지(최대 5개)</span>
    <input 
        type="file" 
        id="img-upload" 
        // onChange={(e) => encodeFileToBase64(e.target.files[0])} 
        accept="image/x-png,image/gif,image/jpeg"
    />
    <button className="subtitle-2" style={{marginLeft: '12px', color: '#FF5A00', textDecorationLine:'underline'}}>+ 이미지 업로드하기</button>

    </>
  );
};

export default TodayDesignWorks;

TodayDesignWorks.propTypes = {
  title: PropTypes.string,
};
