import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
    <Html>
      <Head>
        <href src="http://49.50.161.149:8080/api/oauth2/authorization/kakao" />
        <script defer src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content="560076046384-85b0ilm8ddujlk22l36dn6sqhbfst59p.apps.googleusercontent.com"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
