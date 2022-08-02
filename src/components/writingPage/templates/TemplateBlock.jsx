import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GRAY300 } from "../../../styles/theme";
import { parseTemplateName } from "../../../utills/parser";
import SbTemplate from "./sbTemplate/SbTemplate";
import WorkflowTemplate from "./workflowTemplate/WorkflowTemplate";
import QaTemplate from "./qaTemplate/Qatemplate";
import IaTemplate from "./iaTemplate/IaTemplate";
import DesignTemplate from "./designTemplate/DesignTemplate";
import DevTemplate from "./devTemplate/DevTemplate";
import { modalListState } from "../../../state/modalState";
import OpenArrowIcon from "../../elements/OpenArrowIcon";
const FreeTemplate = dynamic(() => import("./freeTemplate/FreeTemplate"), { ssr: false });

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

  & .buttons {
    display: flex;
    align-items: center;

    & > .delete-btn {
      margin-right: 24px;
      text-decoration: underline;
    }

    & > .open-btn {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`;

const TemplateBlock = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setModalList = useSetRecoilState(modalListState);

  const callback = () => {
    console.log("callback");
  };

  const onClickDeleteTemplate = () => {
    console.log("삭제");
    setModalList((prev) => prev.concat({ id: "delete-template-modal", deleteId: 1, callback: callback }));
  };

  const getTemplate = (typeName) => {
    if (typeName === "sb") return <SbTemplate />;
    if (typeName === "ia") return <IaTemplate />;
    if (typeName === "workflow") return <WorkflowTemplate />;
    if (typeName === "free") return <FreeTemplate />;
    if (typeName === "qa") return <QaTemplate />;
    if (typeName === "design") return <DesignTemplate />;
    if (typeName === "develop") return <DevTemplate />;
    return <div>tbd</div>;
  };

  return (
    <BlockWrapper isOpen={isOpen}>
      <div className="tab">
        <span className="headline-6">{parseTemplateName(type)}</span>
        <div className="subtitle-1 buttons">
          <button className="delete-btn" onClick={onClickDeleteTemplate}>
            삭제
          </button>
          <div className="open-btn">
            <button onClick={() => setIsOpen((el) => !el)}>{isOpen ? "닫기" : "열기"}</button>
            <OpenArrowIcon rotate={isOpen ? 180 : 0} />
          </div>
        </div>
      </div>
      {isOpen && getTemplate(type)}
    </BlockWrapper>
  );
};

export default TemplateBlock;

TemplateBlock.propTypes = {
  type: PropTypes.string.isRequired,
};
