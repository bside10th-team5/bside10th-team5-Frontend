import styled from "styled-components";
import { GRAY700 } from "../../../../styles/theme";
import TitleTextarea from "../../../articles/TitleTextarea";
import { Row } from "../../../settingPage/AddProjectPage.style";
import { Box, Title } from "../Templates.style";
import RadioCheckBox from "../../../articles/RadioCheckBox";
import { useState } from "react";
import { ReviewBox, UploadBox, UploadButton } from "../Templates.style";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

const Wrapper = styled(Box)`
  & .subtitle {
    margin: 0 0 34px 12px;
    color: ${GRAY700};
  }
`;

const ExcelWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`

const IaWorkHistory = () => {
    const [uploadTypeRadio, setUploadTypeRadio] = useState("excel");
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
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    const handleRadioBox = (e) => {
        setUploadTypeRadio(e.target.value)
    }

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

    const handleExcelFile = (fileBlob) => {
      ExcelRenderer(fileBlob, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          setColumns(res.cols);
          setRows(res.rows);
        }
      });
    }
     
    
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
        <Wrapper>
            <Row alignItems="flex-end">
                <Title className="headline-6">IA 작업을 기록해 보세요</Title>
            </Row>
            <Row>
                <RadioCheckBox 
                    name="upload-type" 
                    value="excel" 
                    onChange={handleRadioBox} 
                    isChecked={uploadTypeRadio === "excel"} 
                    marginRight="1rem"
                >
                    <span className="button">액셀로 업로드</span>
                </RadioCheckBox>
                <RadioCheckBox 
                    name="upload-type" 
                    value="image" 
                    onChange={handleRadioBox} 
                    isChecked={uploadTypeRadio === "image"} 
                >
                    <span className="button">이미지로 업로드</span>
                </RadioCheckBox>
            </Row>
            {uploadTypeRadio === "excel" ? (
                // 엑셀 파일 업로드하기 경우
                <UploadBox>
                    <input
                        type="file"
                        id="img-upload"
                        onChange={(e) => handleExcelFile(e.target.files[0])}
                        accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    />
                    {rows.length > 0 ? (
                      <ExcelWrapper>
                        <OutTable data={rows} columns={columns} />
                      </ExcelWrapper>
                    ) : (
                      <>
                        <img src="/img/icon/upload.png" alt="업로드 이미지" />
                        <UploadButton className="button" htmlFor="img-upload">
                            엑셀 파일 업로드하기
                        </UploadButton>
                      </>
                    )}
                    
                </UploadBox>
            ) : (
                // 이미지 업로드하기 경우
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
                            이미지 파일 업로드하기
                        </UploadButton>
                    </>
                    )}
                </UploadBox>
            )}
                {srData[nowPage].imgSrc && (
                    <Row justifyContent="center" marginTop="20px">
                      <UploadButton className="button" htmlFor="img-upload">
                        이미지 변경
                      </UploadButton>
                    </Row>
                )}
            <ReviewBox>
                <TitleTextarea
                title="화면의 정의가 무엇인가요?"
                placeholder="홈 화면과 쇼핑 화면, 마이페이지 화면 설계"
                text={srData[nowPage].review1}
                handleTextarea={onChangeReview1}
                />
                <TitleTextarea
                title="사용자에게 어떤 행동을 유도하는 것이 목표인가요?"
                placeholder="홈 화면 메인배너를 통해 쇼핑하기 진입 유도"
                text={srData[nowPage].review2}
                handleTextarea={onChangeReview2}
                />
                <TitleTextarea
                title="목표를 달성하기 위해, 화면 설계에서 중점적으로 고민했던 부분은 무엇인가요?"
                placeholder="메인 배너 크기와 위치 조절"
                text={srData[nowPage].review3}
                handleTextarea={onChangeReview3}
                />          
            </ReviewBox>
        </Wrapper>
    )}

export default IaWorkHistory