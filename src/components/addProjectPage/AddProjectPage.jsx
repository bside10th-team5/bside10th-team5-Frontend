import { useRouter } from "next/router";
import React from "react";
import MediumBtn from "../elements/MediumBtn";
import RadioWithImg from "../elements/RadioWithImg";
import { Gnb, Tag, WideWrapper } from "../elements/Wrapper.style";
import { Box, Row, Title } from "./AddProjectPage.style";

const AddProjectPage = () => {
  const router = useRouter();

  const onClickSave = () => {
    //TODO: 저장하고 id 받아서 이동
    router.push("/writing/exampleid");
  };

  const onClickLogout = () => {
    router.push("/");
  };

  return (
    <WideWrapper>
      <Gnb theme={{ isVisible: true }}>
        <div>로고</div>
        <div onClick={onClickLogout}>로그아웃</div>
      </Gnb>
      <section style={{ marginTop: "7rem" }}>
        <Row>
          <Title>프로젝트명*</Title>
          <Box>
            <input
              style={{ border: "none", backgroundColor: "transparent", width: "100%", height: "100%" }}
              type="text"
            />
          </Box>
        </Row>
        <Row>
          <Title>프로젝트 기간*</Title>
          <div>
            <span>datepicker1</span> ~ <span>datepicker2</span>
          </div>
        </Row>
        <Row>
          <Title>프로젝트 기본 정보(한번 등록하면 회고록 작성을 쉽게할 수 있어요)</Title>
          <Box>
            <span>프로젝트 유형</span>
            <label>
              <input type="checkbox" name="color" value="web" /> 웹(web)
            </label>
            <label>
              <input type="checkbox" name="color" value="app" /> 앱(app)
            </label>
          </Box>
          <Box>
            <span>프로젝트 TOOL</span>
            <Tag>PPT</Tag>
            <Tag>PPT</Tag>
            <Tag>PPT</Tag>
            <Tag>PPT</Tag>
            <Tag theme={{ color: "black" }}>+ 추가등록</Tag>
          </Box>
        </Row>
        <Row>
          <Title>썸네일 이미지 선택*</Title>
          <Box>
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
            <RadioWithImg src="https://via.placeholder.com/200x150.jpg" alt="샘플" name="샘플" value="샘플" />
          </Box>
        </Row>
        <MediumBtn text="프로젝트 저장" onClick={onClickSave} />
      </section>
    </WideWrapper>
  );
};

export default AddProjectPage;
