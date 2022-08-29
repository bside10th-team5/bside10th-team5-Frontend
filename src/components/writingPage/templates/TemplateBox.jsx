import React from "react";
import PropTypes from "prop-types";
import useHover from "../../../hooks/useHover";
import styled from "styled-components";
import { WHITE } from "../../../styles/theme";

export const TemplateBoxWrapper = styled.button`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > img {
    width: 100%;
  }

  & > .hover-text {
    position: absolute;
    width: 100%;
    height: calc(100% - 56px);
    background: rgba(17, 17, 17, 0.5);
    color: ${WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 27px;
  }

  & .template-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
  }
`;

const TemplateBox = ({ onClick, src, hoverText, value, name }) => {
  const [ref, isHover] = useHover();

  return (
    <TemplateBoxWrapper
      onClick={onClick}
      value={value}
      // @ts-ignore
      ref={ref}
    >
      {/* // TODO : ref 왜뜨징? */}
      <img src={src} />
      {isHover ? <span className="headline-6-rg hover-text">{hoverText}</span> : ""}
      <div className="headline-5 template-name">{name}</div>
    </TemplateBoxWrapper>
  );
};

export default TemplateBox;

TemplateBox.propTypes = {
  value: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  name: PropTypes.string,
  hoverText: PropTypes.string,
};
