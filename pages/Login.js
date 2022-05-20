import React from "react";
import styled from "styled-components";
// import kakao_button_image from '../src/images/kakao_login_medium_narrow.png'; --Todo

export const kakao_button = styled.img`
  width: 60px;
`;

export default function Login() {
  return (
    <>
      <div>로그인 화면입니다..</div>
      <div>
        <a href={KAKAO_AUTH_URL}></a>
      </div>
    </>
  );
}

// KAKAO_AUTH_URL은 다른 페이지에서 관리
const CLIENT_ID = "REST API 부분을 넣어준다.";
const REDIRECT_URI = "설정한 리다이렉트 URL을 넣어준다";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
