import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import { modalListState } from "../../state/modalState";
import { WHITE } from "../../styles/theme";
import CloseIcon from "../elements/CloseIcon";
import { ItemWrapper, ItemBox, ItemTitle, ItemType, ItemDate, CloseIconWrapper } from "./MemoriesPage.style";

const Items = () => {
  const mockItemList = [
    {
      id: 1,
      src: "img/thumbnail/side_project.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 2,
      src: "img/thumbnail/project.png",
      title: "비사이드 프로젝트 회고록",
      type: "자유형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 3,
      src: "img/thumbnail/growing_up.png",
      title:
        "길게길게 프로젝트 회고록 길게길게 프로젝트 회고록 길게길게 프로젝트 회고록 길게길게 프로젝트 회고록 길게길게 프로젝트 회고록",
      type: "자유형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 4,
      src: "img/thumbnail/learned.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 5,
      src: "img/thumbnail/worklog.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 6,
      src: "img/thumbnail/worklog.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 7,
      src: "img/thumbnail/side_project.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 8,
      src: "img/thumbnail/project.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 9,
      src: "img/thumbnail/growing_up.png",
      title: "비사이드 프로젝트 회고록",
      type: "자유형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 10,
      src: "img/thumbnail/learned.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 11,
      src: "img/thumbnail/worklog.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 12,
      src: "img/thumbnail/worklog.png",
      title: "비사이드 프로젝트 회고록",
      type: "프로젝트형",
      date: "22.22.22 ~ 22.22.22",
    },
    {
      id: 13,
      src: "img/thumbnail/side_project.png",
      title: "비사이드 프로젝트 회고록",
      type: "자유형",
      date: "22.22.22 ~ 22.22.22",
    },
  ];
  const router = useRouter();
  const setModalList = useSetRecoilState(modalListState);

  const onClickAddProject = () => {
    router.push("/addproject");
  };

  const onClickProject = () => {
    router.push("/writing/[id]", "/writing/exampleid");
  };

  const openDeleteProjectModal = (e) => {
    e.stopPropagation();
    setModalList((prev) => prev.concat({ id: "delete-project-modal" }));
  };

  return (
    <ItemWrapper>
      <ItemBox onClick={onClickAddProject}>
        <img src="img/thumbnail/new.png" />
      </ItemBox>
      {mockItemList.map((el) => (
        <ItemBox key={el.id} onClick={onClickProject}>
          <CloseIconWrapper type="button" onClick={openDeleteProjectModal}>
            <CloseIcon color={WHITE} width={16.33} height={16.33} />
          </CloseIconWrapper>
          <img src={el.src} />
          <ItemTitle className="headline-6">{el.title}</ItemTitle>
          <div className="item-ref">
            <ItemType className="body-2">{el.type}</ItemType>
            <ItemDate className="body-2">{el.date}</ItemDate>
          </div>
        </ItemBox>
      ))}
    </ItemWrapper>
  );
};

export default Items;
