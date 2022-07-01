import { RecoilRoot } from "recoil";
import PropTypes from "prop-types";
import AppThemeProvider from "../src/styles/AppThemeProvider";
import "../src/styles/font.css";
import ModalContainer from "../src/components/articles/ModalContainer";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AppThemeProvider>
        <ModalContainer />
        <Component {...pageProps} />
      </AppThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

// 일반적인 사용예
// 페이지 전환 시에도 전체 레이아웃을 유지하고 싶을 경우
// 페이지 전환 후에도 state를 유지하고 싶을 경우
// 페이지에 추가적인 데이터를 삽입하고 싶은 경우
// 글로벌한 CSS를 적용하고 싶은 경우

// _app.js에 'getInitialProps'를 추가할 경우, 정적 생성 (static generation)이 없는 페이지의 자동 정적 최적화 (Automatic static optimization)가 비활성화됩니다.
// _app.js에 'getInitialProps'를 추가할 경우, 반드시 'import App from "next/app"'을 해서 'getInitialProps' 내에 있는 'App.getInitialProps(appContext)'를 호출하고 리턴된 object를 return value와 병합합니다.
// App component는 'getStaticProps'나 'getServersideProps'를 지원하지 않습니다.
