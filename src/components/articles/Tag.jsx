import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";
import CloseIcon from "../elements/CloseIcon";
import { tagState } from "../../state/addProjectState";
import { useSetRecoilState } from "recoil";

export const Wrapper = styled.span`
  background: rgba(255, 122, 65, 0.16);
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 17.33px 0 18px;
  border-radius: 0.4rem;
  margin-right: 0.75rem;

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
  const themeContext = useContext(ThemeContext);
  const setTagsState = useSetRecoilState(tagState);
  const onClickDeleteTag = (target) => {
    setTagsState((tags) => {
      const filteredTags = tags.filter((tag) => tag !== target);
      return filteredTags;
    });
  };
  return (
    <Wrapper>
      <span className="ko-button">{text}</span>
      <button onClick={() => onClickDeleteTag(text)}>
        <CloseIcon color={themeContext.color.orange} />
      </button>
    </Wrapper>
  );
};

export default Tag;

Tag.propTypes = {
  text: PropTypes.string,
};
