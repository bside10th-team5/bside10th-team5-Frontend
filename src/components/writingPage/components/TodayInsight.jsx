import React from "react";
import PropTypes from "prop-types";
import TextareaBasic from "../../articles/TextareaBasic";
import { Row } from "../../elements/Wrapper.style";
import { Box, Title } from "../templates/Templates.style";

const TodayInsight = ({ subTitle }) => {
  return (
    <Box>
      <Row>
        <Title className="headline-6">인사이트</Title>
        <span className="body-2" style={{ marginBottom: "32px", marginLeft: "12px" }}>
          {subTitle}
        </span>
      </Row>
      <TextareaBasic />
    </Box>
  );
};

export default TodayInsight;

TodayInsight.propTypes = {
  subTitle: PropTypes.string,
};
