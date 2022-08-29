import React from "react";
import PropTypes from "prop-types";
import TextareaBasic from "../../articles/TextareaBasic";
import { Row } from "../../elements/Wrapper.style";
import { Box, Title } from "../templates/Templates.style";

//placeholder 바꿀 수 있도록 변경
const TodayInsight = ({ subTitle, marginTop, placeholder }) => {
  return (
    <Box marginTop={marginTop}>
      <Row>
        <Title className="headline-6">인사이트</Title>
        <span className="body-2" style={{ marginBottom: "32px", marginLeft: "12px" }}>
          {subTitle}
        </span>
      </Row>
      <TextareaBasic placeholder={placeholder}/>
    </Box>
  );
};

export default TodayInsight;

TodayInsight.propTypes = {
  subTitle: PropTypes.string,
  marginTop: PropTypes.number,
  placeholder: PropTypes.string,
};
