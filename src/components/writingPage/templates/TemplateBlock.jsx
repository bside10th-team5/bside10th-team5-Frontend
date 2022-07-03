import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GRAY300 } from "../../../styles/theme";
import { parseTemplateName } from "../../../utills/parser";
import SrTemplate from "./SrTemplate";

const BlockWrapper = styled.div.attrs((props) => ({
  isOpen: props.isOpen,
}))`
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid ${GRAY300};
  margin-bottom: 20px;

  & .tab {
    display: flex;
    justify-content: space-between;
    height: 72px;
    padding: 20px 24px;
    border-bottom: ${({ isOpen }) => (isOpen ? `1px solid ${GRAY300}` : "none")};
  }

  & .open-tab {
    height: auto;
    margin: 36px 44px;
  }
`;

const TemplateBlock = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BlockWrapper isOpen={isOpen}>
      <div className="tab">
        <span className="headline-6">{parseTemplateName(type)}</span>
        <button onClick={() => setIsOpen((el) => !el)}>{isOpen ? "닫기" : "열기"}</button>
      </div>
      {isOpen && <SrTemplate />}
    </BlockWrapper>
  );
};

export default TemplateBlock;

TemplateBlock.propTypes = {
  type: PropTypes.string.isRequired,
};
