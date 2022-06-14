import React from "react";
import { Box, Title } from "./AddProjectPage.style";

const ProjectSummary = () => {
  return (
    <Box>
      <Title className="ko-headline-6">프로젝트 한줄소개</Title>
      <textarea name="" id="" rows={5} cols={4}></textarea>
    </Box>
  );
};

export default ProjectSummary;
