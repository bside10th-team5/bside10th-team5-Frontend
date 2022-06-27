import styled from "styled-components";
import { GNB_H, GRAY100, GRAY500, GRAY700, GRAY900, ORANGE, WHITE } from "../../styles/theme";

export const Section = styled.section`
  box-sizing: border-box;
  width: 1200px;
  padding: 52px 0 100px 0;
  margin: ${GNB_H}px auto 0 auto;
  color: ${GRAY900};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GRAY500};
  margin-bottom: 44px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  & .date {
    color: ${GRAY900};
    margin-top: 4px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  & > .title {
    color: ${GRAY900};
  }

  & > .tag {
    color: ${GRAY700};
    background: ${GRAY100};
    border-radius: 5px;
    padding: 4px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-left: 20px;
  }
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
