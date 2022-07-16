import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaTitle from "../../../articles/TextareaTitle";
import CircleArrowIcon from "../../../elements/CircleArrowIcon";
import { Box, ScreenTitle, ReviewBox, Title, UploadBox, UploadButton } from "../Templates.style";
import { Row } from "../../../elements/Wrapper.style";

const SbScreenReview = () => {
  const [srData, setSrData] = useState({
    1: {
      title: "",
      imgSrc: "",
      review1: "",
      review2: "",
      review3: "",
    },
  });
  const [nowPage, setNowPage] = useState(1);

  const onClickPrevPage = () => {
    if (nowPage > 1) {
      setNowPage((prev) => prev - 1);
    }
  };

  const onClickNextPage = () => {
    if (!srData[nowPage].imgSrc) {
      return;
    }

    if (!srData[nowPage + 1]) {
      setSrData((data) => {
        const newData = { ...data };
        newData[nowPage + 1] = {
          title: "",
          imgSrc: "",
          review1: "",
          review2: "",
          review3: "",
        };
        return newData;
      });
    }

    setNowPage((prev) => prev + 1);
  };

  const onChangeTitle = (e) => {
    const newTitle = e.target.value;
    setSrData((data) => {
      const newData = { ...data };
      newData[nowPage].title = newTitle;
      return newData;
    });
  };

  const onChangeReview1 = (e) => {
    const newReviw = e.target.value;
    setSrData((data) => {
      const newData = { ...data };
      newData[nowPage].review1 = newReviw;
      return newData;
    });
  };
  const onChangeReview2 = (e) => {
    const newReviw = e.target.value;
    setSrData((data) => {
      const newData = { ...data };
      newData[nowPage].review2 = newReviw;
      return newData;
    });
  };
  const onChangeReview3 = (e) => {
    const newReviw = e.target.value;
    setSrData((data) => {
      const newData = { ...data };
      newData[nowPage].review3 = newReviw;
      return newData;
    });
  };

  const encodeFileToBase64 = (fileBlob) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      fileReader.onload = () => {
        setSrData((data) => {
          const newData = { ...data };
          newData[nowPage].imgSrc = fileReader.result;
          return newData;
        });
        resolve();
      };
    });
  };

  return (
    <Box>
      <Title className="headline-6">주요 설계 화면에 대한 고민을 남겨보세요</Title>
      <Row justifyContent="space-between" marginBottom="28px">
        <button onClick={onClickPrevPage}>
          <CircleArrowIcon rotate={180} />
        </button>
        <ScreenTitle
          className="headline-6"
          type="text"
          value={srData[nowPage].title}
          placeholder="화면 이름을 입력해주세요"
          onChange={onChangeTitle}
        />
        <button onClick={onClickNextPage}>
          <CircleArrowIcon />
        </button>
      </Row>
      <UploadBox>
        <input
          type="file"
          id="img-upload"
          onChange={(e) => encodeFileToBase64(e.target.files[0])}
          accept="image/x-png,image/gif,image/jpeg"
        />
        {srData[nowPage].imgSrc ? (
          <img className="preview" src={srData[nowPage].imgSrc} alt="이미지" />
        ) : (
          <>
            <img src="/img/icon/upload.png" alt="업로드 이미지" />
            <UploadButton className="button" htmlFor="img-upload">
              설계 이미지 업로드하기
            </UploadButton>
          </>
        )}
      </UploadBox>
      {srData[nowPage].imgSrc && (
        <Row justifyContent="center" marginTop="20px">
          <UploadButton className="button" htmlFor="img-upload">
            이미지 변경
          </UploadButton>
        </Row>
      )}
      <ReviewBox>
        <TextareaTitle
          title="화면의 정의가 무엇인가요?"
          placeholder="업로드한 설계의 정의에 대해 작성해 주세요"
          text={srData[nowPage].review1}
          handleTextarea={onChangeReview1}
        />
        <TextareaTitle
          title="사용자에게 어떤 행동을 유도하는 것이 목표인가요?"
          placeholder="업로드한 설계의 목표에 대해 작성해 주세요"
          text={srData[nowPage].review2}
          handleTextarea={onChangeReview2}
        />
        <TextareaTitle
          title="목표를 달성하기 위해, 화면 설계에서 중점적으로 고민했던 부분은 무엇인가요?"
          placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
          text={srData[nowPage].review3}
          handleTextarea={onChangeReview3}
        />
      </ReviewBox>
    </Box>
  );
};

export default SbScreenReview;

SbScreenReview.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  src: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  review3: PropTypes.string,
};
