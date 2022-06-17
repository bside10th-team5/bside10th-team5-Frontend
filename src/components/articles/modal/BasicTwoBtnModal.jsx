import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalListState } from "../../../state/modalState";
import CustomBtn from "../../elements/CustomBtn";
import { BLACK, GRAY500, GRAY700, ORANGE } from "../../../styles/theme";
import CloseIcon from "../../elements/CloseIcon";

export const Modal = styled.div`
  position: relative;
  width: 640px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 28px 0;
`;

const Title = styled.div`
  color: ${BLACK};
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

// TODO: custom 하게 쓸수있게 수정해야댐
const BasicTwoBtnModal = () => {
  const setModalList = useSetRecoilState(modalListState);

  const onClickDelteProject = () => {
    // TODO: 삭제프로세스
    setModalList([]);
  };

  const onClickCloseModal = () => {
    setModalList([]);
  };

  return (
    <Modal>
      <CloseIconWrapper onClick={onClickCloseModal}>
        <CloseIcon color="black" width={16.33} height={16.33} />
      </CloseIconWrapper>
      <Title className="headline-6">해당 회고록을 정말 삭제하시겠습니까?</Title>
      <SubTitle>데이터는 복구가 불가능합니다</SubTitle>
      <BtnWrapper>
        <CustomBtn
          text="취소"
          onClick={onClickCloseModal}
          width="99px"
          height="48px"
          borderRadius="5px"
          border="1px solid black"
          color={GRAY700}
        />
        <CustomBtn
          text="확인"
          onClick={onClickDelteProject}
          width="99px"
          height="48px"
          borderRadius="5px"
          bgColor={ORANGE}
        />
      </BtnWrapper>
    </Modal>
  );
};

export default BasicTwoBtnModal;