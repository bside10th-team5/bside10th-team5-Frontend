import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import CustomBtn from "../elements/CustomBtn";
import { WideWrapper } from "../elements/Wrapper.style";
import { Row, Section } from "./AddProjectPage.style";
import ProjectDate from "./ProjectDate";
import ProjectDeviceAndTool from "./ProjectDeviceAndTool";
import Gnb from "../articles/Gnb";
import ProjectName from "./ProjectName";
import ProjectSummary from "./ProjectSummary";
import ProjectThumbnail from "./ProjectThumbnail";
import Footer from "../articles/Footer";

const AddProjectPage = () => {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);

  const onClickSave = () => {
    //TODO: 저장하고 id 받아서 이동
    router.push("/writing/[id]", "/writing/exampleid");
  };

  return (
    <WideWrapper>
      <Gnb isVisible />
      <Section>
        <ProjectName />
        <ProjectSummary />
        <ProjectDate />
        <ProjectDeviceAndTool />
        <ProjectThumbnail />
        <Row justifyContent="center">
          <CustomBtn
            text="회고록 생성"
            onClick={onClickSave}
            width="399px"
            borderRadius="5px"
            bgColor={themeContext.color.orange}
          />
        </Row>
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default AddProjectPage;
