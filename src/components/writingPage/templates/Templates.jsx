import React from "react";
import { useSetRecoilState } from "recoil";
import { templateListState, toggleAddTemplateState } from "../../../state/writeDiaryState";
import { Row } from "../../settingPage/AddProjectPage.style";
import TemplateBox from "./TemplateBox";
import { TemplateTitle, TemplateWrapper } from "../WritingPage.style";

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
      <TemplateTitle>
        <span className="headline-5">어떤 작업을 하셨나요?</span>
        <button className="subtitle-1 free-btn" onClick={handleTemplateList} value="free">
          자유형으로 작성하기 &gt;
        </button>
      </TemplateTitle>
      <TemplateWrapper>
        <Row justifyContent="space-between" gap="24px">
          <TemplateBox
            value="workflow"
            name="워크플로우"
            src="/img/templates/template_workflow.png"
            hoverText="사용자 목표에 맞춰 화면들의 구조와 흐름을 설계하는 단계"
            onClick={handleTemplateList}
          />
          <TemplateBox
            value="ia"
            name="IA"
            src="/img/templates/template_ia.png"
            hoverText="각 화면들의 정보 구조도를 상세 정의하여,
            개발/디자인 작업 목록을 구체화하는 단계"
            onClick={handleTemplateList}
          />
          <TemplateBox
            value="sb"
            name="설계"
            src="/img/templates/template_sb.png"
            hoverText="화면 별 구성요소와 배치,
            동작 방식 들을 정의하는 단계"
            onClick={handleTemplateList}
          />
        </Row>
        <Row justifyContent="space-between" gap="24px">
          <TemplateBox
            value="design"
            name="디자인 관련"
            src="/img/templates/template_design.png"
            hoverText="디자인 관련 주요 내용 기록"
            onClick={handleTemplateList}
          />
          <TemplateBox
            value="develop"
            name="개발 관련"
            src="/img/templates/template_develop.png"
            hoverText="개발 관련 주요 내용 기록"
            onClick={handleTemplateList}
          />
          <TemplateBox
            value="qa"
            name="QA"
            src="/img/templates/template_qa.png"
            hoverText="QA 관련 주요 내용 기록"
            onClick={handleTemplateList}
          />
        </Row>
      </TemplateWrapper>
    </article>
  );
};

export default Templates;
