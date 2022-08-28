import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateListState, toggleAddTemplateState } from "../../../state/writeDiaryState";
import AddTemplate from "./AddTemplate";
import { AddTemplateBtn } from "../WritingPage.style";
import TemplateBlock from "./TemplateBlock";

const TemplateViews = () => {
  const templateList = useRecoilValue(templateListState);
  const [toggleAddTemplate, setToggleAddTemplate] = useRecoilState(toggleAddTemplateState);

  const handleToggleAddTemplate = () => {
    setToggleAddTemplate((prev) => !prev);
  };

  return (
    <div style={{ height: "auto" }}>
      {templateList.map((el) => (
        <TemplateBlock key={el.id} type={el.type} id={el.id} />
      ))}
      {!toggleAddTemplate && (
        <AddTemplateBtn className="headline-6" onClick={handleToggleAddTemplate}>
          + 템플릿 추가하기
        </AddTemplateBtn>
      )}
      {toggleAddTemplate && <AddTemplate />}
    </div>
  );
};

export default TemplateViews;
