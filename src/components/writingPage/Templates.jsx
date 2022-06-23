import React from "react";
import { useSetRecoilState } from "recoil";
import { templateListState, toggleAddTemplateState } from "../../state/writeDiaryState";
import { TemplateBox } from "./WritingPage.style";

const Templates = () => {
  const setTemplateList = useSetRecoilState(templateListState);
  const setToggleAddTemplate = useSetRecoilState(toggleAddTemplateState);

  const handleTemplateList = (e) => {
    const templateName = e.currentTarget.value;
    setTemplateList((prev) => {
      // TODO : 아래꺼랑 묶어서 리팩토링 필요
      const templates = [...prev];
      if (!templates.includes(templateName)) {
        templates.push(templateName);
      }
      return templates;
    });
    setToggleAddTemplate(false); // 템플릿 추가 영역 닫아주기
  };

  return (
    <article>
      <div style={{ marginBottom: "28px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>어떤 작업을 하셨나요?</div>
        <button onClick={handleTemplateList} value="free">
          자유형으로 작성하기
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TemplateBox onClick={handleTemplateList} value="workflow">
            <img />
            <div>워크플로우</div>
          </TemplateBox>
          <TemplateBox onClick={handleTemplateList} value="ia">
            <img />
            <div>ia</div>
          </TemplateBox>
          <TemplateBox onClick={handleTemplateList} value="interior">
            <img />
            <div>설계</div>
          </TemplateBox>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TemplateBox onClick={handleTemplateList} value="design">
            <img />
            <div>디자인 관련</div>
          </TemplateBox>
          <TemplateBox onClick={handleTemplateList} value="develop">
            <img />
            <div>개발 관련</div>
          </TemplateBox>
          <TemplateBox onClick={handleTemplateList} value="qa">
            <img />
            <div>qa</div>
          </TemplateBox>
        </div>
      </div>
    </article>
  );
};

export default Templates;
