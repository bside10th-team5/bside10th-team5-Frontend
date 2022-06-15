import React, { useState } from "react";
import RadioWithImg from "../elements/RadioWithImg";
import { Box, Row, Title } from "./AddProjectPage.style";

const ProjectThumbnail = () => {
  const [thumbnailRadio, setThumbnailRadio] = useState("side-project");

  const handleRadioBox = (e) => {
    setThumbnailRadio(e.target.value);
  };

  return (
    <Box marginBottom="3.25rem">
      <Title className="ko-headline-6" marginBottom="2.5rem">
        썸네일 이미지 선택<span>*</span>
      </Title>
      <Row justifyContent="space-between">
        <RadioWithImg
          name="thumbnail"
          value="side-project"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "side-project"}
          src="img/thumbnail/side_project.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="work-log"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "work-log"}
          src="img/thumbnail/worklog.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="project"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "project"}
          src="img/thumbnail/project.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="i-learned"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "i-learned"}
          src="img/thumbnail/learned.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="grow-up"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "grow-up"}
          src="img/thumbnail/growing_up.png"
          alt="thumbnail-img"
        />
      </Row>
    </Box>
  );
};

export default ProjectThumbnail;
