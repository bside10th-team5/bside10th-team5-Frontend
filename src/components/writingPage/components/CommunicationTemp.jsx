import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaBasic from "../../articles/TextareaBasic";
import { Row } from "../../elements/Wrapper.style";
import { Box, Title } from "../templates/Templates.style";
import styled from "styled-components";
import { Slider } from "@mui/material";

//TODO: placeholder 바꿀 수 있도록 변경

const TempSlider = styled(Slider)({
  color: "black",
  height: '12px',
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: 'rgba(255, 159, 0, 1)',
  },
  '& .MuiSlider-thumb': {
    height: '12px',
    width: '12px',
    backgroundColor: '#fff',
    border: '2px solid #949494',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#EFEFEF',
  },
})


const TempTextArea = styled.span`
  margin-left: 8px;
  margin-bottom: 28px;
  color: rgba(255, 159, 0, 1);
`


const CommunicationTemp = ({ marginTop }) => {
  const [temp, setTemp] = useState(0);

  const handleSliderChange = (e, newValue) => {
    setTemp(newValue)
  }


  return (
    <Box marginTop={marginTop}>
      <Row>
        <Row>
          <Title className="headline-6">커뮤니케이션 온도체크</Title>
          <Row justifyContent='center'>
            <div style={{width: '220px', marginBottom: '20px', marginLeft:'12px'}} >
              <TempSlider 
                value={typeof temp === 'number' ? temp : 0} 
                onChange={handleSliderChange} 
                aria-label="custom thumb label"
                aria-labelledby="input-slider" 
                style={{height: '12px'}}
              />
            </div>
            <TempTextArea 
              className="subtitle-2"
            >
              {temp}&#8451;
            </TempTextArea>
          </Row>
        </Row>
      </Row>
      <TextareaBasic placeholder="회원가입에 대한 열띤 토론! 디자인팀 덕분에 오늘도 좋은 에너지를 받았다."/>
    </Box>
  );
};

export default CommunicationTemp;

CommunicationTemp.propTypes = {
  subTitle: PropTypes.string,
  marginTop: PropTypes.number,
};