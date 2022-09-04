import React from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalListState } from "../../../state/modalState";
import CustomBtn from "../../elements/CustomBtn";
import { GRAY300, GRAY500, GRAY700, GRAY900, ORANGE, WHITE } from "../../../styles/theme";
import CloseIcon from "../../elements/CloseIcon";

export const Modal = styled.div`
  position: relative;
  width: 640px;
  background: ${WHITE};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 28px 0;
`;

const Title = styled.div`
  color: ${GRAY900};
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  color: ${GRAY500};
`;

const CloseIconWrapper = styled.button`
  position: absolute;
  top: 29.83px;
  right: 29.83px;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 1.5rem;
`;

const DeleteTemplateModal = ({ callback }) => {
  const setModalList = useSetRecoilState(modalListState);

  const onClickDelteProject = () => {
    callback();
    setModalList([]);
  };

  const onClickCloseModal = () => {
    setModalList([]);
  };

  return (
    <Modal>
      <CloseIconWrapper onClick={onClickCloseModal}>
        <CloseIcon width={16.33} height={16.33} />
      </CloseIconWrapper>
      <Title className="headline-6">템플릿을 정말 삭제하시겠어요?</Title>
      <SubTitle>입력하신 내용은 복구가 불가능해요.</SubTitle>
      <BtnWrapper>
        <CustomBtn
          text="취소"
          onClick={onClickCloseModal}
          width="99px"
          borderRadius="5px"
          border={`1px solid ${GRAY300}`}
          color={GRAY700}
        />
        <CustomBtn text="삭제" onClick={onClickDelteProject} width="99px" borderRadius="5px" bgColor={ORANGE} />
      </BtnWrapper>
    </Modal>
  );
};

export default DeleteTemplateModal;

DeleteTemplateModal.propTypes = {
  deleteId: PropTypes.number,
  callback: PropTypes.func,
};
