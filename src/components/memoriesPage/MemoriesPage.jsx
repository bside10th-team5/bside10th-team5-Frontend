import React from "react";
import { useRouter } from "next/router";
import { WideWrapper } from "../elements/Wrapper.style";
import { ItemBox, ItemWrapper } from "./MemoriesPage.style";
import Gnb from "../articles/Gnb";

const MemoriesPage = () => {
  const router = useRouter();

  const onClickAddProject = () => {
    router.push("/addproject");
  };

  const onClickProject = () => {
    router.push("/writing/[id]", "/writing/exampleid");
  };

  return (
    <WideWrapper>
      <Gnb isVisible />
      <section style={{ marginTop: "7rem", width: "100%" }}>
        <ItemWrapper>
          <ItemBox onClick={onClickAddProject}>프로젝트 추가</ItemBox>
          <ItemBox onClick={onClickProject}>프로젝트 샘플</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
          <ItemBox>프로젝트 1</ItemBox>
        </ItemWrapper>
      </section>
    </WideWrapper>
  );
};

export default MemoriesPage;
