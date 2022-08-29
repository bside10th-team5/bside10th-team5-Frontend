import React from "react";
import QaTestEnv from "./QaTestEnv";
import QaTestResult from "./QaTestResult";
import { Box, Title } from "../Templates.style";

const QaTestReview = () => {
  return (
    <Box>
      <Title className="headline-6">QA 테스트 리뷰</Title>
      <QaTestEnv />
      <QaTestResult />
    </Box>
  );
};

export default QaTestReview;
