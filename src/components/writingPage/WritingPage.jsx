import React from "react";
// import { useRouter } from "next/router";
import { WideWrapper } from "../elements/Wrapper.style";
import Gnb from "../articles/Gnb";
import { Section } from "./WritingPage.style";
import Footer from "../articles/Footer";
import Templates from "./Templates";
import { useRecoilValue } from "recoil";
import { templateListState } from "../../state/writeDiaryState";
import TemplateViews from "./TemplateViews";

const wrtingPage = () => {
  // const router = useRouter();
  // const { id } = router.query;
  const templateList = useRecoilValue(templateListState);

  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <div
          style={{
            paddingBottom: "20px",
            border: "1px solid orange",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "44px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <div>비사이드 프로젝트 회고록</div>
              <div style={{ marginLeft: "1rem", border: "1px solid red" }}>프로젝트형</div>
            </div>
            <div>22.05.03 ~ 22.08.09</div>
          </div>
          <div>
            <button>정보 수정하기</button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            background: "black",
            color: "white",
            height: "4rem",
            alignItems: "center",
          }}
        >
          <div>22년 06월 15일</div>
          <div>캘린더 열기</div>
        </div>
        {templateList.length === 0 && <Templates />}
        {templateList.length > 0 && <TemplateViews />}
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default wrtingPage;
