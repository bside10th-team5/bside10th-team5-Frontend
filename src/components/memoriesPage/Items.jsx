import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { useProjectList } from "../../state/memoriesState";
import { modalListState } from "../../state/modalState";
import { WHITE } from "../../styles/theme";
import { parseProjectType } from "../../utills/parser";
import CloseIcon from "../elements/CloseIcon";
import { ItemWrapper, ItemBox, ItemTitle, ItemType, ItemDate, CloseIconWrapper } from "./MemoriesPage.style";
import { Observer } from "../elements/Wrapper.style";

const Items = () => {
  const target = useRef();
  const setModalList = useSetRecoilState(modalListState);
  const [page, setPage] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const { fetchFunc, deleteFunc } = useProjectList();
  // TODO: //useInfiniteQeury 로 리팩토린
  const { data } = useQuery(["projectList", page], fetchFunc, {
    select: (data) => {
      const { content } = data.data;
      const normalized = content.map((el) => {
        return {
          id: el.id,
          src: `img/thumbnail/${el.thumbnailId}.png`,
          title: el.title,
          type: parseProjectType(el.projectType),
          startDate: el.fromDate.slice(2),
          endDate: el.toDate.slice(2),
        };
      });
      return { isLast: data.data.last, list: normalized };
    },
  });

  const openDeleteProjectModal = (e) => {
    e.stopPropagation();
    setModalList((prev) => prev.concat({ id: "delete-project-modal", callback: () => deleteFunc(e.target.value) }));
  };

  useEffect(() => {
    if (data) {
      if (!projectList) {
        setProjectList(data.list);
      } else {
        setProjectList((prev) => prev.concat(data.list));
      }
    }
  }, [data]);

  useEffect(() => {
    // TODO: custom hook 으로 리팩토링
    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (data && !data?.isLast) {
          setPage((prev) => prev + 1);
        }
      }
    };

    const option = {
      root: null,
      threshold: 1,
    };

    const observer = new IntersectionObserver(observerCallback, option);
    const currentTarget = target.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [target, data]);

  return (
    <ItemWrapper>
      <Link href="/addproject">
        <ItemBox>
          <img src="img/thumbnail/new.png" />
        </ItemBox>
      </Link>
      {projectList.map((el) => (
        <Link key={el.id} href="/writing/[id]" as={`/writing/${el.id}`}>
          <ItemBox>
            <CloseIconWrapper type="button" onClick={openDeleteProjectModal} value={el.id}>
              <CloseIcon color={WHITE} width={16.33} height={16.33} />
            </CloseIconWrapper>
            <img src={el.src} />
            <ItemTitle className="headline-6">{el.title}</ItemTitle>
            <div className="item-ref">
              <ItemType className="body-2">{el.type}</ItemType>
              <ItemDate className="body-2">{`${el.startDate} ~ ${el.endDate}`}</ItemDate>
            </div>
          </ItemBox>
        </Link>
      ))}
      <Observer ref={target} />
    </ItemWrapper>
  );
};

export default Items;
