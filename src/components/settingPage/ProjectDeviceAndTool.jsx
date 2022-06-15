import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tagState } from "../../state/addProjectState";
import { modalListState } from "../../state/modalState";
import Checkbox from "../articles/Checkbox";
import Tag from "../articles/Tag";
import { Row, SubTitle, Box, Title, AddTagButton } from "./AddProjectPage.style";

const ProjectDeviceAndTool = () => {
  const [isWebChecked, setWebChecked] = useState(true);
  const [isMobileChecked, setMobileChecked] = useState(false);
  const tags = useRecoilValue(tagState);
  const setModalList = useSetRecoilState(modalListState);

  const openTagModal = () => {
    setModalList((prev) => prev.concat({ id: "addTagModal" }));
  };

  const handleCheckBox = (e) => {
    if (e.target.id === "mobile") setMobileChecked((prev) => !prev);
    if (e.target.id === "web") setWebChecked((prev) => !prev);
  };

  return (
    <Box marginBottom="3rem">
      <Title className="ko-headline-6" marginBottom="2.5rem">
        프로젝트 기본 정보<span className="ko-caption">한번 등록하면 회고록 작성을 쉽게할 수 있어요</span>
      </Title>
      <Row marginBottom="1.5rem">
        <SubTitle className="ko-subtitle-1">디바이스 유형</SubTitle>
        <Checkbox id="web" isChecked={isWebChecked} width="133px" marginRight="0.75rem" onChange={handleCheckBox}>
          <span className="ko-button">웹 (web)</span>
        </Checkbox>
        <Checkbox id="mobile" isChecked={isMobileChecked} width="174px" onChange={handleCheckBox}>
          <span className="ko-button">모바일 (Mobile)</span>
        </Checkbox>
      </Row>
      <Row marginBottom="0">
        <SubTitle className="ko-subtitle-1">프로젝트 TOOL</SubTitle>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
        <AddTagButton className="ko-body-2" type="button" onClick={openTagModal}>
          + 태그추가
        </AddTagButton>
      </Row>
    </Box>
  );
};

export default ProjectDeviceAndTool;
