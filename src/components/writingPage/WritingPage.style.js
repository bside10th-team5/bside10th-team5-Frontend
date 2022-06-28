import styled from "styled-components";
import { GNB_H, GRAY300, GRAY700, GRAY900, ORANGE, WHITE } from "../../styles/theme";

export const Section = styled.section`
  box-sizing: border-box;
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
  color: ${GRAY900};
`;

//TODO: 이런거 커스텀해놔야됨
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const CalendarTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${GRAY900};
  color: ${WHITE};
  height: 72px;
  align-items: center;
  padding: 0 24px;
  border-radius: 4px;

  & .btn {
    color: ${ORANGE};
  }
`;

export const TemplateTitle = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .free-btn {
    text-decoration-line: underline;
  }
`;

export const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const TemplateBoxWrapper = styled.button`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > img {
    width: 100%;
  }

  & > .hover-text {
    position: absolute;
    width: 100%;
    height: calc(100% - 56px);
    background: rgba(17, 17, 17, 0.5);
    color: ${WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .template-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 12px;
  }
`;

export const DayTemplate = styled.div`
  width: 100%;
  height: 72px;
  padding: 20px 24px;
  border-radius: 4px;
  border: 1px solid ${GRAY300};
  margin-bottom: 20px;
`;

export const AddTemplateBtn = styled.button`
  width: 100%;
  height: 128px;
  border-radius: 4px;
  border: 1px solid ${GRAY300};
  color: ${GRAY700};
`;

export const CancelAddTemplateBtn = styled(AddTemplateBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
