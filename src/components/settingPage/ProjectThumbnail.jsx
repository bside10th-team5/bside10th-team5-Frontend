import React from "react";
import { useRecoilState } from "recoil";
import { thumbnailIdState } from "../../state/addProjectState";
import RadioWithImg from "../elements/RadioWithImg";
import { Box, Row, Title } from "./AddProjectPage.style";

const ProjectThumbnail = () => {
  const [thumbnailRadio, setThumbnailRadio] = useRecoilState(thumbnailIdState);

  const handleRadioBox = (e) => {
    setThumbnailRadio(e.target.value);
  };

  return (
    <Box marginBottom="3.25rem">
      <Title className="headline-6" marginBottom="1.75rem">
        썸네일 이미지 선택 <span>*</span>
      </Title>
      <Row justifyContent="space-between">
        <RadioWithImg
          name="thumbnail"
          value="side-project"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "side-project"}
          src="img/thumbnail/0.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="work-log"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "work-log"}
          src="img/thumbnail/1.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="project"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "project"}
          src="img/thumbnail/2.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="i-learned"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "i-learned"}
          src="img/thumbnail/3.png"
          alt="thumbnail-img"
        />
        <RadioWithImg
          name="thumbnail"
          value="grow-up"
          onChange={handleRadioBox}
          isChecked={thumbnailRadio === "grow-up"}
          src="img/thumbnail/4.png"
          alt="thumbnail-img"
        />
      </Row>
    </Box>
  );
};

export default ProjectThumbnail;
