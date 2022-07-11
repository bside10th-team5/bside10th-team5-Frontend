import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BigText,
  Bold,
  SmallText,
  ItemWrapper,
  TextWrapper,
  LoginTitle,
  LoginText,
  IconWrapper,
  Footer,
  FooterText,
} from "../../src/components/loginPage/LoginPage.style.jsx";
import { isLoggedInState } from "../../src/state";
import { getCookie, setCookie } from "../../src/utills/cookie.js";

const Login = () => {
  const router = useRouter();
  const token = router.query.accessToken;
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [redirectOrigin, setRedirectOrigin] = useState("https://what-happen.com");
  const [lastAuthInfo, setLastAuthInfo] = useState("");

  const kakaoLoginURL = `https://what-happen.com/api/oauth2/authorization/kakao?redirectUrl=${redirectOrigin}/login`;
  const naverLoginURL = `https://what-happen.com/api/oauth2/authorization/naver?redirectUrl=${redirectOrigin}/login`;
  const googleLoginURL = `https://what-happen.com/api/oauth2/authorization/google?redirectUrl=${redirectOrigin}/login`;

  const serverURL = "https://what-happen.com/api/member/me";

  const onClickLogin = (url) => {
    const screenW = screen.availWidth;
    const screenH = screen.availHeight;
    const popW = 600;
    const popH = 600;
    const posL = (screenW - popW) / 2;
    const posT = (screenH - popH) / 2;
    window.open(url, "test", `width=${popW},height=${popH},top=${posT},left=${posL},resizable=yes,scrollbars=no`);
  };

  const getUserInfo = async () => {
    await axios
      .get(`${serverURL}`)
      .then((res) => {
        localStorage.setItem("oauth2RegistrationId", res.data.oauth2RegistrationId);
        opener.window.location = "/memories";
        window.close();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const accessToken = getCookie("token");
    if (accessToken) {
      router.push("/memories");
      setIsLoggedIn(true);
    } else if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getUserInfo();
      setCookie("token", token);
    }
  }, [token]);

  useEffect(() => {
    const oauth = localStorage.getItem("oauth2RegistrationId");
    setLastAuthInfo(oauth);
  }, []);

  useEffect(() => {
    setRedirectOrigin(window.location.origin);
  }, []);

  return (
    <div>
      <ItemWrapper>
        <TextWrapper>
          <BigText>
            서비스 기획자를 위한 <Bold>회고록 서비스</Bold>
          </BigText>
          <SmallText>오늘의 회고를 통해 나만의 커리어 스토리를 만들어보세요!</SmallText>
          <LoginTitle>
            <LoginText>로그인</LoginText>
          </LoginTitle>
        </TextWrapper>
        <IconWrapper>
          <button onClick={() => onClickLogin(kakaoLoginURL)} style={{ position: "relative" }}>
            <img src="/img/login/kakao.png" alt="카카오톡 아이콘" />
            <img
              src="/img/login/desc.png"
              alt=""
              style={{
                display: `${lastAuthInfo === "KAKAO" ? "block" : "none"}`,
                position: "absolute",
                top: "-24px",
                left: "-52px",
              }}
            />
          </button>
          <button onClick={() => onClickLogin(googleLoginURL)} style={{ position: "relative" }}>
            <img src="/img/login/google.png" alt="구글 아이콘" />
            <img
              src="/img/login/desc.png"
              alt=""
              style={{
                display: `${lastAuthInfo === "GOOGLE" ? "block" : "none"}`,
                position: "absolute",
                top: "-24px",
                left: "-52px",
              }}
            />
          </button>
          <button onClick={() => onClickLogin(naverLoginURL)} style={{ position: "relative" }}>
            <img src="/img/login/naver.png" alt="네이버 아이콘" />
            <img
              src="/img/login/desc.png"
              alt=""
              style={{
                display: `${lastAuthInfo === "NAVER" ? "block" : "none"}`,
                position: "absolute",
                top: "-24px",
                left: "-52px",
              }}
            />
          </button>
        </IconWrapper>
        <Footer>
          <FooterText>Copyright 2022. 자비없는형제들 All pictures cannot be copied without permission</FooterText>
        </Footer>
      </ItemWrapper>
    </div>
  );
};

export default Login;
