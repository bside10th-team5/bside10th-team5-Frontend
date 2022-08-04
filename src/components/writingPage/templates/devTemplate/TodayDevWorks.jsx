import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GRAY300, GRAY500, ORANGE } from "../../../../styles/theme";
import TitleTextarea from "../../../articles/TextareaTitle";
import { Box, PageTag, Title } from "../Templates.style";
import { Row, Column } from "../../../elements/Wrapper.style";
import CloseIcon from "../../../elements/CloseIcon";

//TODO: 나중에 TodayWorks 컴포넌트로 변환

const DevWorksWrapper = styled(Box)`
  & .empty-box {
    width: 100%;
    padding: 16px;
    color: ${GRAY500};
    border: 1px solid ${GRAY300};
    border-radius: 4px;
  }

  & .tag-box {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  & .add-tag {
    color: ${GRAY500};
    margin-left: 20px;
    cursor: pointer;
    min-width: 68px;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 36px;
  display: flex;
  justify-content: flex-start;

  & .image-container {
    width: 208px;
    height: 118px;
  }

  & .close-button {
    position: relative;
    left: -24px;
    top: 8px;
    cursor: pointer
  }
`

const TodayDevWorks = ({ title }) => {
  const [tagList, setTagList] = useState(["개발 미팅", "개발 일정관리", "기획서 Q&A", "백로그 관리"]);
  const [works, setWorks] = useState({});
  const [imageUrl, setImageUrl] = useState([])
  const imageUrlList = []

  const onClickTag = (name) => {
    if (!Object.keys(works).includes(name)) {
      setWorks((prev) => {
        const newWorks = { ...prev };
        newWorks[name] = "";
        return newWorks;
      });
    } 
  };

  const handleCloseTag = (name) => {
    setWorks((prev) => {
      const newWorks = { ...prev };
      delete newWorks[name];
      return newWorks;
    });
  };

  const encodeFileToBase64 = (files) => {
    if (files.length > 5) {
      alert('한번에 업로드 가능한 사진은 최대 5장 까지 입니다.')
    }
    else {
      for (let i = 0; i < files.length; i++) {
        let fileReader = new FileReader();

        fileReader.onload = () => {
          imageUrlList[i] = fileReader.result;
          setImageUrl([...imageUrlList]);
        };
        fileReader.readAsDataURL(files[i]);      
      }
    }    
  };

  const onClickCloseButton = (e) => {
    const fileUrlId = e.target.id
    setImageUrl(imageUrl.filter(item => item !== fileUrlId))
  }

  return (
    <>
    <DevWorksWrapper>
      <Row alignItems='center'>
        <Title className="headline-6" style={{ marginRight: "40px", minWidth: "193px" }}>
          {title}
        </Title>
        <Row marginBottom="28px">
          <div className="tag-box">
            {tagList.map((key, i) => (
              <PageTag
                key={key}
                className="button"
                onClick={(e) => onClickTag(e.currentTarget.value)}
                value={key}
                colorCase={(i % 4) + 1}
              >
                {key}
              </PageTag>
            ))}
          </div>
          <span
            className="body-2 add-tag"
            style={{}}
            onClick={() => {
              const tagName = prompt("추가등록");
              setTagList((prev) => prev.concat(tagName));
            }}
          >
            + 추가등록
          </span>
        </Row>
      </Row>
      {Object.keys(works).length === 0 ? (
        <div className="body-2 empty-box">오늘 작업한 설계 업무 내용 중 하나를 선택해 주세요</div>
      ) : (
        <Column gap="16px">
          {Object.keys(works).map((key) => (
            <TitleTextarea
              key={key}
              title={key}
              placeholder="업로드한 설계에 대해 고민한 부분을 작성해 주세요"
              text={works[key]}
              handleClose={handleCloseTag}
            >
              <PageTag className="button" colorCase={(tagList.indexOf(key) % 4) + 1}>
                {key}
              </PageTag>
            </TitleTextarea>
          ))}
        </Column>
      )}
    </DevWorksWrapper>
    <Row>
      <span className="headline-6">
        개발 업무 이미지(최대 5개)
      </span>
      <input 
        type="file" 
        multiple
        id="img-upload" 
        style={{display: 'none'}}
        onChange={(e) => encodeFileToBase64(e.target.files)} 
        accept="image/x-png,image/gif,image/jpeg"
      />
      <label htmlFor="img-upload" className="custom">
        <span 
          className="body-2" 
          style={{marginLeft: '12px', color: `${ORANGE}`, textDecorationLine:'underline', cursor: 'pointer'}}
        >
          + 이미지 업로드하기
        </span>
      </label>
    </Row>
    {imageUrlList ? (
        <ImageWrapper>
          {imageUrl.map((fileUrl) => 
            <>
              <img 
                className="image-container"
                key={fileUrl} 
                src={fileUrl} 
              />
<<<<<<< HEAD
              <CloseIcon className="close-button" color="black" width={16} height={16} onClick={onClickCloseButton} />
              {/* <img
=======
              <img
>>>>>>> Feat: 개발 템플릿 작업 완료
                className="close-button"
                id={fileUrl}
                src='/img/design/btn/close_bk.svg' 
                height='16px'
                onClick={onClickCloseButton}
<<<<<<< HEAD
              /> */}
=======
              />
>>>>>>> Feat: 개발 템플릿 작업 완료
            </>
            )
          }
        </ImageWrapper>
      ) : (
        <span></span>
      )}
    

    </>
  );
};

export default TodayDevWorks;

TodayDevWorks.propTypes = {
  title: PropTypes.string,
  todayDesign: PropTypes.string,
};
