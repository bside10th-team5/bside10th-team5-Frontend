// /** @type {import('next').NextConfig} */
const intercept = require("intercept-stdout"); // TODO: recoil ssr 관련 에러있음 임시코드라 업데이트시 확인필요

// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
