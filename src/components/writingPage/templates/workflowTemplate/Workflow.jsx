import React from "react";
import { Box, Title } from "../Templates.style";
import TextareaBasic from "../../../articles/TextareaBasic";

const Workflow = () => {
  return (
    <Box>
      <Title className="headline-6">오늘 진행한 워크플로우 업무</Title>
      <TextareaBasic />
    </Box>
  );
};

export default Workflow;
