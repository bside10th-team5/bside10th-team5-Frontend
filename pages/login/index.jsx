import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useState, useEffect, } from "react";
import {  getCookies, setCookies, removeCookies, getCookie } from "cookies-next";
import { BigText, Bold, SmallText, ItemWrapper, TextWrapper, LoginTitle, LoginText, IconWrapper, socialLoginButton, googleFloatingButton, Footer, FooterText } from "../../src/components/loginPage/LoginPage.style.jsx";
import { accessTokenState, kakaoAccessTokenState, naverAccessTokenState, googleAccessTokenState, recentLoginPathState } from "../../src/state/index.js";
import cookie from 'cookie'
const axios = require('axios').default

const Login = () => {
  // const [profile, setProfile] = useRecoilState(userProfile)
  // const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [kakaoAccessToken, setKakaoAccessToken] = useRecoilState(kakaoAccessTokenState)
  const [naverAccessToken, setNaverAccessToken] = useRecoilState(naverAccessTokenState)
  const [googleAccessToken, setGoogleAccessToken] = useRecoilState(googleAccessTokenState)
  const [recentLoginPath, setRecentLoginPath] = useRecoilState(recentLoginPathState)
  // const [token, setToken] = useState("")

  
  const router = useRouter();
  const kakaoLoginURL = 'https://what-happen.com/api/oauth2/authorization/kakao?redirectUrl=http://localhost:3000/login'
  const naverLoginURL = 'https://what-happen.com/api/oauth2/authorization/naver?redirectUrl=http://localhost:3000/login'
  const googleLoginURL = 'https://what-happen.com/api/oauth2/authorization/google?redirectUrl=http://localhost:3000/login'
  const serverURL = 'https://what-happen.com/api/member/me'
  const token = router.query.accessToken;

  const getUserInfo = async() => {
    await axios
      .get(`${serverURL}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    const accessToken = getCookie("token");
    if (accessToken) {
      router.push("/");
    } else {
      const token = router.query.accessToken;
      if (token) {
        setCookies("token", token);
        getUserInfo()
        router.push("/");
        
      }
    }
  }, [token]);

  const onKakaoButtonClick = () => {
    router.push(kakaoLoginURL)
  }
    

  const onGoogleButtonClick = () => {  
    router.push(googleLoginURL)
  }

  const onNaverButtonClick = async() => {
    router.push(naverLoginURL)
  }

  return (
    <div>
      <ItemWrapper>
        <TextWrapper>
          <BigText>서비스 기획자를 위한 <Bold>회고록 서비스</Bold></BigText>
          <SmallText>오늘의 회고를 통해 나만의 커리어 스토리를 만들어보세요!</SmallText>
          <LoginTitle><LoginText>로그인</LoginText></LoginTitle>
        </TextWrapper>
        <IconWrapper>
          {/* <button onClick={onKakaoButtonClick} ><img src="/images/kakao.png" alt="카카오톡 아이콘" /></button> */}
          <socialLoginButton onClick={onKakaoButtonClick}><img src="/images/kakao.png" alt="카카오톡 아이콘" /></socialLoginButton>
          <socialLoginButton onClick={onGoogleButtonClick}><img src="/images/google.png" alt="구글 아이콘" /></socialLoginButton>
          <socialLoginButton onClick={onNaverButtonClick}><img src="/images/naver.png" alt="네이버 아이콘" /></socialLoginButton>
        </IconWrapper>
        {/* <googleFloatingButton></googleFloatingButton> */}
        <Footer><FooterText>Copyright 2022. 자비없는형제들 All pictures cannot be copied without permission</FooterText></Footer>
      </ItemWrapper>
      
    </div>
  );
}

export default Login;