import React from "react";
import { useRouter } from "next/router";
import CustomBtn from "../elements/CustomBtn";
import { WideWrapper } from "../elements/Wrapper.style";
import { Section } from "./AddProjectPage.style";
import ProjectDate from "./ProjectDate";
import ProjectDeviceAndTool from "./ProjectDeviceAndTool";
import Gnb from "../articles/Gnb";
import ProjectName from "./ProjectName";
import ProjectSummary from "./ProjectSummary";
import ProjectThumbnail from "./ProjectThumbnail";
import Footer from "../articles/Footer";
import { useMutation } from "react-query";
import { boardNameState, useCreateBoard } from "../../state/addProjectState";
import { useRecoilValue } from "recoil";
import { ORANGE } from "../../styles/theme";
import { Row } from "../elements/Wrapper.style";

const AddProjectPage = () => {
  const router = useRouter();
  const title = useRecoilValue(boardNameState);
  const { addProject } = useCreateBoard();

  const { mutate } = useMutation(addProject, {
    onSuccess: (res) => {
      router.push("/writing/[id]", `/writing/${res.data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
            onClick={mutate}
            width="374px"
            borderRadius="5px"
            bgColor={ORANGE}
            disabled={!title}
          />
        </Row>
      </Section>
      <Footer />
    </WideWrapper>
  );
};

export default AddProjectPage;
