import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import LogoIcon from "../elements/LogoIcon";
import styled from "styled-components";
import { useRouter } from "next/router";
import { GNB_H, WHITE, GRAY100 } from "../../styles/theme";
import { getCookie } from "cookies-next";

const token = getCookie("token")

const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

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
  background-color: ${WHITE};
  border-bottom: 1px solid ${GRAY100};
  transform: ${(props) => (props.isVisible ? "translateY(0%)" : "translateY(-100%)")};
  transition: all 400ms ease-in-out 0s;
  & button {
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const Gnb = ({ isVisible }) => {
  const router = useRouter();

  const onClick = (e) => {
    const { value } = e.currentTarget;
    if (value === "list-page") router.push("/memories");
    if (value === "logout") router.push("/");
    if (value === "logo") router.push("/");
    let { value } = e.target;

    if (value === "list-page") router.push("/memories");
    if (value === "logout") {
      deleteCookie("token")
      router.push("/");
      router.reload();
    }
    if (value === "login") {
      router.push("/login")
    } 
  };

  return (
    <GnbWrapper isVisible={isVisible}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={onClick} value="logo">
          <LogoIcon />
        </button>
        <button className="subtitle-2" value="list-page" onClick={onClick} style={{ marginLeft: "3.75rem" }}>
          회고록 리스트
        </button>
      </div>
      <div>
        {token ? 
          <button className="subtitle-2" value="logout" onClick={onClick}>로그아웃</button> 
          : 
          <button className="subtitle-2" value="login" onClick={onClick}>로그인</button>
        }
      </div>
    </GnbWrapper>
  );
};

export default Gnb;

Gnb.propTypes = {
  isVisible: PropTypes.bool,
};
