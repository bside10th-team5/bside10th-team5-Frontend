import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { setCookies, getCookie } from "cookies-next";
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
import { userIdState, oauth2RegistrationIdState } from "../../src/state";

const axios = require("axios").default;

const Login = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const [oauth2RegistrationId, setOauth2RegistrationId] = useRecoilState(oauth2RegistrationIdState);

  const router = useRouter();
  const kakaoLoginURL =
    "https://what-happen.com/api/oauth2/authorization/kakao?redirectUrl=http://localhost:3000/login";
  const naverLoginURL =
    "https://what-happen.com/api/oauth2/authorization/naver?redirectUrl=http://localhost:3000/login";
  const googleLoginURL =
    "https://what-happen.com/api/oauth2/authorization/google?redirectUrl=http://localhost:3000/login";
  const serverURL = "https://what-happen.com/api/member/me";
  const token = router.query.accessToken;

  const getUserInfo = async () => {
    await axios
      .get(`${serverURL}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserId(res.data.id);
        setOauth2RegistrationId(res.data.oauth2RegistrationId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const accessToken = getCookie("token");
    if (accessToken) {
      router.push("/memories");
    } else {
      const token = router.query.accessToken;
      if (token) {
        setCookies("token", token);
        getUserInfo();
        router.push("/memories");
      }
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem("id") !== userId) {
      localStorage.removeItem("id");
      localStorage.setItem("id", userId);
    }
    if (localStorage.getItem("oauth2RegistrationId") !== oauth2RegistrationId) {
      localStorage.removeItem("oauth2RegistrationId");
      localStorage.setItem("oauth2RegistrationId", oauth2RegistrationId);
    }
  }, [userId]);

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
          <a href={kakaoLoginURL}>
            <img src="/images/kakao.png" alt="카카오톡 아이콘" />
          </a>
          <a href={googleLoginURL}>
            <img src="/images/google.png" alt="구글 아이콘" />
          </a>
          <a href={naverLoginURL}>
            <img src="/images/naver.png" alt="네이버 아이콘" />
          </a>
        </IconWrapper>
        <Footer>
          <FooterText>Copyright 2022. 자비없는형제들 All pictures cannot be copied without permission</FooterText>
        </Footer>
      </ItemWrapper>
    </div>
  );
};

export default Login;
