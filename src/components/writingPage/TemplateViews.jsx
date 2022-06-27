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
        <div
          key={el}
          className="headline-6"
          style={{
            width: "100%",
            height: "72px",
            padding: "20px 24px",
            borderRadius: "4px",
            border: "1px solid #C8C8C8",
            marginBottom: "20px",
          }}
        >
          {el}
        </div>
      ))}
      {!toggleAddTemplate && (
        <button
          className="headline-6"
          style={{ width: "100%", height: "128px", borderRadius: "4px", border: "1px solid #C8C8C8", color: "#555555" }}
          onClick={onClickAddTemplate}
        >
          + 템플릿 추가하기
        </button>
      )}
      {toggleAddTemplate && (
        <div style={{ width: "100%", borderRadius: "4px", border: "1px solid #C8C8C8" }}>
          <div
            className="headline-6"
            style={{
              width: "100%",
              height: "128px",
              borderBottom: "1px solid #C8C8C8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={onClickAddTemplate}
          >
            - 템플릿 추가 취소하기
          </div>
          <div style={{ padding: "48px 28px" }}>
            <Templates />
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateViews;
