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
import axios from "axios";
import { createBoardUrl } from "../../utills/url";
import { getCookie } from "../../utills/cookie";

const AddProjectPage = () => {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);

  const onClickSave = async () => {
    //TODO: 저장하고 id 받아서 이동
    const token = getCookie("token");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    await axios
      .post(
        `${createBoardUrl}`,
        {
          boardType: "WEB",
          title: "test123",
          detail: "asdfasf",
          fromDate: "2022-01-01",
          toDate: "2022-01-01",
          projectType: "PROJECT",
          usedTools: ["figma", "photo샵ㅍ"],
          thumbnailId: 2,
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + token,
        //   },
        // },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

    // console.log("ok");
    // console.log(data);
    // router.push("/writing/[id]", "/writing/exampleid");
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
            width="374px"
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
