import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GRAY300, GRAY500 } from "../../../styles/theme";
import TextareaTitle from "../../articles/TextareaTitle";
import { Box, PageTag, Title } from "../templates/Templates.style";
import { Row, Column } from "../../elements/Wrapper.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalListState } from "../../../state/modalState";
import CloseIcon from "../../elements/CloseIcon";
import { getColor } from "../../../utills/parser";
import AdditionalTags from "./AdditionalTags";

const Wrapper = styled(Box)`
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

const TodayWorks = ({ title, placeholder, defaultHolder, tagListState, secondTagListState }) => {
  const [tagList, setTagList] = useRecoilState(tagListState);
  const [secondTagList, setSecondTagList] = useRecoilState(secondTagListState);
  const [works, setWorks] = useState({});
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);
  const setModalList = useSetRecoilState(modalListState);
  const ref = useRef(null);

  const toggleSecondaryTags = () => {
    setIsOpenSecondary((prev) => !prev);
  };

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
    if (secondTagList.length === 0) {
      if (!tagList.includes(tagName)) {
        setTagList((prev) => prev.concat(tagName));
      }
    } else {
      if (!tagList.includes(tagName) && !secondTagList.includes(tagName)) {
        setSecondTagList((prev) => prev.concat(tagName));
      }
    }
  };

  const deleteTagList = (e, value) => {
    e.stopPropagation();
    const isInFirstTagList = tagList.includes(value);
    const hasSecondTagList = secondTagList.length > 0;

    if (isInFirstTagList && hasSecondTagList) {
      let target;
      setSecondTagList((prev) => {
        const newTagList = [...prev];
        target = newTagList[0];
        newTagList.shift();
        return newTagList;
      });
      setTagList((prev) => {
        const newTagList = prev.filter((el) => el !== value);
        newTagList.push(target);
        return newTagList;
      });
    } else if (isInFirstTagList && !hasSecondTagList) {
      setTagList((prev) => {
        const newTagList = prev.filter((el) => el !== value);
        return newTagList;
      });
    } else {
      setSecondTagList((prev) => {
        const newTagList = prev.filter((el) => el !== value);
        return newTagList;
      });
    }

    setWorks((prev) => {
      const newWorks = { ...prev };
      delete newWorks[value];
      return newWorks;
    });
  };

  useEffect(() => {
    const listWidth = ref.current.clientWidth;
    if (secondTagList.length === 0 && listWidth > 685) {
      let tagName;
      setTagList((prev) => {
        tagName = prev[prev.length - 1];
        const newTagList = prev.slice(0, -1);
        return newTagList;
      });
      setSecondTagList((prev) => prev.concat(tagName));
    }
  }, [ref.current?.clientWidth, tagList]);

  return (
    <Wrapper>
      <Row alignItems="center">
        <Title className="headline-6" style={{ marginRight: "40px", minWidth: "193px" }}>
          {title}
        </Title>
        <Row marginBottom="28px" ref={ref}>
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
                <i className="close-wrapper" onClick={(e) => deleteTagList(e, key)}>
                  <CloseIcon width={9.33} height={9.33} color={getColor((i % 4) + 1)} />
                </i>
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
        <AdditionalTags
          isOpen={isOpenSecondary}
          secondTagList={secondTagList}
          handleTags={toggleSecondaryTags}
          deleteTagList={deleteTagList}
          onClickTag={onClickTag}
        />
      </Row>
      {Object.keys(works).length === 0 ? (
        <div className="body-2 empty-box">{defaultHolder}</div>
      ) : (
        <Column gap="16px">
          {Object.keys(works).map((key) => (
            <TextareaTitle
              key={key}
              title={key}
              placeholder={placeholder}
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
    </Wrapper>
  );
};

export default TodayWorks;

TodayWorks.propTypes = {
  title: PropTypes.string,
  defaultHolder: PropTypes.string,
  placeholder: PropTypes.string,
  tagListState: PropTypes.any,
  secondTagListState: PropTypes.any,
};
