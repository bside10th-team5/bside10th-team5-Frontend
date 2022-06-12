import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { tagState } from "../../../state/addProjectState";
import { modalListState } from "../../../state/modalState";

export const Modal = styled("div")`
  width: 500px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;

const AddTagModal = () => {
  const setTags = useSetRecoilState(tagState);
  const setModalList = useSetRecoilState(modalListState);
  const [tagName, setTagName] = useState("");

  const onChange = (e) => {
    setTagName(e.target.value);
  };

  const onClickAddTag = () => {
    setTags((prev) => {
      if (!prev.includes(tagName)) {
        return prev.concat(tagName);
      }
      return prev;
    });
    setModalList([]);
  };

  const onClickCloseModal = () => {
    setModalList([]);
  };

  return (
    <Modal>
      addtagmodal
      <input type="text" onChange={onChange} />
      <div>
        <button onClick={onClickCloseModal}>취소</button>
        <button onClick={onClickAddTag}>확인</button>
      </div>
    </Modal>
  );
};

export default AddTagModal;
