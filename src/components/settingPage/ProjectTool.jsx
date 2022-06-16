import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tagState } from "../../state/addProjectState";
import { modalListState } from "../../state/modalState";
import Tag from "../articles/Tag";
import { Row, SubTitle } from "./AddProjectPage.style";

const ProjectTool = () => {
  const tags = useRecoilValue(tagState);
  const setModalList = useSetRecoilState(modalListState);

  const openTagModal = () => {
    setModalList((prev) => prev.concat({ id: "addTagModal" }));
  };

  return (
    <Row marginBottom="0">
      <SubTitle className="subtitle-1">프로젝트 TOOL</SubTitle>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
      <span onClick={openTagModal}>+태그추가</span>
    </Row>
  );
};

export default ProjectTool;
