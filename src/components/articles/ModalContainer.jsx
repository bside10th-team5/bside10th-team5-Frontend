import React from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { modalListState } from "../../state/modalState";
import AddTagModal, { Modal } from "./modal/AddTagModal";

const ModalWrapper = styled("article")`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: background-color 0.2s;
  background-color: rgba(7, 19, 46, 0.1);
  z-index: 100;
  overflow: auto;

  ${Modal} {
    :not(:last-of-type) {
      display: none;
    }
  }
`;

const ModalContainer = () => {
  const modalList = useRecoilValue(modalListState);

  if (modalList.length === 0) {
    return null;
  }
  return createPortal(
    <ModalWrapper>
      {modalList.map((modalRegister) => {
        if (modalRegister.id === "addTagModal") return <AddTagModal />;
      })}
    </ModalWrapper>,
    document.body,
  );
};

export default ModalContainer;
