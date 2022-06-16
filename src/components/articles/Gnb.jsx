import React from "react";
import PropTypes from "prop-types";
import LogoIcon from "../elements/LogoIcon";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GNB_H } from "../../styles/theme";

const GnbWrapper = styled.header.attrs((props) => ({
  isVisible: props.isVisible,
}))`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${GNB_H}px;
  padding: 20px 40px;
  background-color: white;
  border-bottom: 1px solid #ececec;
  transform: ${(props) => (props.isVisible ? "translateY(0%)" : "translateY(-100%)")};
  transition: all 400ms ease-in-out 0s;
  & button {
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const Gnb = ({ isVisible }) => {
  const router = useRouter();

  const onClick = (e) => {
    const { value } = e.target;
    if (value === "list-page") router.push("/memories");
    if (value === "logout") router.push("/");
  };

  return (
    <GnbWrapper isVisible={isVisible}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoIcon />
        <button className="subtitle-2" value="list-page" onClick={onClick} style={{ marginLeft: "3.75rem" }}>
          회고록 리스트
        </button>
      </div>
      <button value="logout" className="subtitle-2" onClick={onClick}>
        로그아웃
      </button>
    </GnbWrapper>
  );
};

export default Gnb;

Gnb.propTypes = {
  isVisible: PropTypes.bool,
};
