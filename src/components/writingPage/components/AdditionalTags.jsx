import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import OpenArrowIcon from "../../elements/OpenArrowIcon";
import { GRAY300, WHITE } from "../../../styles/theme";
import { PageTag } from "../templates/Templates.style";
import { getColor } from "../../../utills/parser";
import CloseIcon from "../../elements/CloseIcon";

const AdditionalTagsToggle = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 28px;
`;

const AdditionalTagsWrapper = styled.div.attrs((props) => ({
  isOpen: props.isOpen || false,
}))`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: flex-start;
  position: absolute;
  top: 38px;
  right: 0;
  width: 600px;
  max-height: 172px;
  overflow-y: scroll;
  background-color: ${WHITE};
  border: 1px solid ${GRAY300};
  border-radius: 4px;
  z-index: 2;
  padding: 16px 34px 16px 20px;
`;

const AdditionalTags = ({ secondTagList, isOpen, handleTags, onClickTag, deleteTagList }) => {
  if (!secondTagList || secondTagList.length === 0) {
    return null;
  }

  return (
    <AdditionalTagsToggle className="body-2">
      {isOpen ? "추가항목 숨기기" : "추가항목 펼치기"}
      <OpenArrowIcon rotate={isOpen ? 180 : 0} onClick={handleTags} />
      <AdditionalTagsWrapper className="tag-box" isOpen={isOpen}>
        {secondTagList.map((key, i) => (
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
      </AdditionalTagsWrapper>
    </AdditionalTagsToggle>
  );
};

export default AdditionalTags;

AdditionalTags.propTypes = {
  secondTagList: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTags: PropTypes.func.isRequired,
  onClickTag: PropTypes.func.isRequired,
  deleteTagList: PropTypes.func.isRequired,
};
