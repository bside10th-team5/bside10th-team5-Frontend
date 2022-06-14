import React from "react";
import RadioWithImg from "../elements/RadioWithImg";
import { Box, Title } from "./AddProjectPage.style";

const ProjectThumbnail = () => {
  return (
    <Box marginBottom="3.25rem">
      <Title className="ko-headline-6" marginBottom="2.5rem">
        썸네일 이미지 선택<span>*</span>
      </Title>
      <div style={{ display: "flex" }}>
        <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
        <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
        <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
        <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
        <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
      </div>
    </Box>
  );
};

export default ProjectThumbnail;
