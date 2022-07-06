import React, { useState } from "react";
import TitleTextarea from "../../../articles/TitleTextarea";
import CircleArrowIcon from "../../../elements/CircleArrowIcon";
import { Row } from "../../../settingPage/AddProjectPage.style";
import { Box, ImgTitle, ReviewBox, Title, UploadBox, UploadButton } from "../Templates.style";

const SbScreenReview = () => {
  const [imgTitle, setImgTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      fileReader.onload = () => {
        // @ts-ignore
        setImgSrc(fileReader.result);
        resolve();
      };
    });
  };

  return (
    <Box>
      <Title className="headline-6">주요 설계 화면에 대한 고민을 남겨보세요</Title>
      <Row justifyContent="space-between" marginBottom="28px">
        <CircleArrowIcon rotate={180} />
        <ImgTitle
          className="headline-6"
          type="text"
          value={imgTitle}
          placeholder="화면 이름을 입력해주세요"
          onChange={(e) => setImgTitle(e.target.value)}
        />
        <CircleArrowIcon />
      </Row>
      <UploadBox>
        <input
          type="file"
          id="img-upload"
          onChange={(e) => encodeFileToBase64(e.target.files[0])}
          accept="image/x-png,image/gif,image/jpeg"
        />
        {imgSrc ? (
          <img className="preview" src={imgSrc} alt="이미지" />
        ) : (
          <>
            <img src="/img/icon/upload.png" alt="업로드 이미지" />
            <UploadButton className="button" htmlFor="img-upload">
              설계 이미지 업로드하기
            </UploadButton>
          </>
        )}
      </UploadBox>
      {imgSrc && (
        <Row justifyContent="center" marginTop="20px">
          <UploadButton className="button" htmlFor="img-upload">
            이미지 변경
          </UploadButton>
        </Row>
      )}
      <ReviewBox>
        <TitleTextarea
          title="화면의 정의가 무엇인가요?"
          placeholder="업로드한 설계의 정의에 대해 작성해 주세요"
          text=""
        />
        <TitleTextarea
          title="사용자에게 어떤 행동을 유도하는 것이 목표인가요?"
          placeholder="업로드한 설계의 목표에 대해 작성해 주세요"
          text=""
        />
        <TitleTextarea
          title="목표를 달성하기 위해, 화면 설계에서 중점적으로 고민했던 부분은 무엇인가요?"
          placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
          text=""
        />
      </ReviewBox>
    </Box>
  );
};

export default SbScreenReview;
