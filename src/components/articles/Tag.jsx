import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CloseIcon from "../elements/CloseIcon";
import { tagState } from "../../state/addProjectState";
import { useSetRecoilState } from "recoil";
import { INPUT_H, ORANGE } from "../../styles/theme";

export const Wrapper = styled.span`
  background: rgba(255, 122, 65, 0.16);
  box-sizing: border-box;
  height: ${INPUT_H}px;
  display: flex;
  align-items: center;
  padding: 12px 19.33px 12px 16px;
  border-radius: 0.4rem;
  margin-right: 0.25rem;

  & span {
    color: ${({ theme }) => theme.color.orange};
    margin-right: 12.33px;
    text-transform: none;
  }

  & button {
    margin-bottom: 1.5px;
    background-color: transparent;
    border: none;
    height: 16px;
    display: flex;
    align-items: center;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
  }
`;

const Tag = ({ text }) => {
  const setTagsState = useSetRecoilState(tagState);
  const onClickDeleteTag = (target) => {
    setTagsState((tags) => {
      const filteredTags = tags.filter((tag) => tag !== target);
      return filteredTags;
    });
  };
  return (
    <Wrapper>
      <span className="button">{text}</span>
      <button onClick={() => onClickDeleteTag(text)}>
        <CloseIcon color={`${ORANGE}`} />
      </button>
    </Wrapper>
  );
};

export default Tag;

Tag.propTypes = {
  text: PropTypes.string,
};
