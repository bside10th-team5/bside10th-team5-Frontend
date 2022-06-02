import React from "react";
import { useRouter } from "next/router";
import { Gnb, WideWrapper } from "../elements/Wrapper.style";
import { ItemBox, ItemWrapper } from "./MemoriesPage.style";

const MemoriesPage = () => {
  const router = useRouter();

  const onClickLogout = () => {
    router.push("/");
  };

  const onClickAddProject = () => {
    router.push("/addproject");
  };

  const onClickProject = () => {
    router.push("/writing/exampleid");
  };

  return (
    <WideWrapper>
      <Gnb theme={{ isVisible: true }}>
        <div>로고</div>
        <div onClick={onClickLogout}>로그아웃</div>
      </Gnb>
      <section style={{ marginTop: "7rem" }}>
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
