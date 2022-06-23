import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { templateListState, toggleAddTemplateState } from "../../state/writeDiaryState";
import Templates from "./Templates";

const TemplateViews = () => {
  const templateList = useRecoilValue(templateListState);
  const [toggleAddTemplate, setToggleAddTemplate] = useRecoilState(toggleAddTemplateState);

  const onClickAddTemplate = () => {
    setToggleAddTemplate((prev) => !prev);
  };

  return (
    <div style={{ height: "auto" }}>
      {templateList.map((el) => (
        <div key={el} style={{ width: "100%", height: "72px", border: "1px solid black" }}>
          {el}
        </div>
      ))}
      {!toggleAddTemplate && (
        <button style={{ width: "100%", height: "128px", border: "1px solid black" }} onClick={onClickAddTemplate}>
          템플릿 추가하기
        </button>
      )}
      {toggleAddTemplate && (
        <button style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "128px",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={onClickAddTemplate}
          >
            템플릿 추가 취소하기
          </div>
          <Templates />
        </button>
      )}
      <button>저장하기</button>
    </div>
  );
};

export default TemplateViews;
