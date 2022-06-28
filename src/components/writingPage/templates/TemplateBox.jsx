import React from "react";
import PropTypes from "prop-types";
import { TemplateBoxWrapper } from "../WritingPage.style";
import useHover from "../../../hooks/useHover";

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
      {isHover ? <div className="hover-text">{hoverText}</div> : ""}
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
