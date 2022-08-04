import React from "react";
import PropTypes from "prop-types";
import TextareaBasic from "../../articles/TextareaBasic";
import { Row } from "../../elements/Wrapper.style";
import { Box, Title } from "../templates/Templates.style";

//TODO: placeholder 바꿀 수 있도록 변경
const TodayInsight = ({ subTitle, marginTop }) => {
  return (
    <Box marginTop={marginTop}>
      <Row>
        <Title className="headline-6">인사이트</Title>
        <span className="body-2" style={{ marginBottom: "32px", marginLeft: "12px" }}>
          {subTitle}
        </span>
      </Row>
      <TextareaBasic placeholder="유저 기반의 UIUX 중요성&#13;&#10;[회원가입] 버튼의 위치변경을 통한 회원가입 비율 10% 확대"/>
    </Box>
  );
};

export default TodayInsight;

TodayInsight.propTypes = {
  subTitle: PropTypes.string,
  marginTop: PropTypes.number,
};
