import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import CustomTextInput from "../../../elements/CustomTextInput";
import { GRAY300, GRAY700, GRAY900, GRAY500, YELLOW, ORANGE, BLUE, GREEN } from "../../../../styles/theme";
import { Row, Column } from "../../../elements/Wrapper.style";

Chart.register(ArcElement);

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid ${GRAY300};
  border-radius: 4px;

  & .subtitle-2 {
    margin-bottom: 12px;
    color: ${GRAY900};
  }

  & .subtitle-1 {
    min-width: 229px;
    color: ${GRAY500};
  }

  & .chart-wrapper {
    position: relative;
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > .chart-label {
      position: absolute;
      color: ${GRAY500};
      top: 136px;
      left: -140px;
    }

    & > .chart-result {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items; center;
      flex-direction: column;
      text-align: center;
    }
  }
`;

const Button = styled.button`
  width: 126px;
  height: 48px;
  color: ${GRAY700};
  border: 1px solid ${GRAY300};
  border-radius: 4px;
`;

const Percent = styled.span.attrs((props) => ({
  color: props.color || YELLOW,
}))`
  color: ${(props) => props.color};
`;

const QaTestResult = () => {
  const [totalErr, setTotalErr] = useState("");
  const [completedErr, setCompletedErr] = useState("");
  const percent = useMemo(() => {
    const result = parseInt((Number(completedErr) / Number(totalErr)) * 100);
    return result > 100 ? 100 : result;
  }, [totalErr, completedErr]);

  const getBackgroundColor = (value) => {
    if (value <= 25) return "rgba(255, 159, 0, 0.16)";
    if (value <= 50) return "rgba(255, 90, 0, 0.16)";
    if (value <= 75) return "rgba(3, 195, 72, 0.16)";
    return "rgba(11, 112, 254, 0.16)";
  };

  const getBorderColor = (value) => {
    if (value <= 25) return YELLOW;
    if (value <= 50) return ORANGE;
    if (value <= 75) return GREEN;
    return BLUE;
  };

  return (
    <Wrapper>
      <div className="subtitle-2">테스트 결과</div>
      <Row gap="73px" alignItems="flex-start">
        <Column gap="20px">
          <Row>
            <span className="subtitle-1">결과상태</span>
            <Row gap="1rem">
              <Button className="button">프리패스</Button>
              <Button className="button">마이너</Button>
              <Button className="button">메이저</Button>
              <Button className="button">크리티컬</Button>
            </Row>
          </Row>
          <Row>
            <span className="subtitle-1">발생한 오류 건수</span>
            <CustomTextInput
              id="total-errror"
              placeholder="숫자입력"
              value={totalErr}
              onChange={(e) => setTotalErr(e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))}
              width="255px"
              textAlign="right"
            />
            <span clanssName="body-1" style={{ color: `${GRAY900}`, marginLeft: "12px" }}>
              건
            </span>
          </Row>
          <Row>
            <span className="subtitle-1">해결한 오류 건수</span>
            <CustomTextInput
              id="completed-errror"
              placeholder="숫자입력"
              value={completedErr}
              onChange={(e) => setCompletedErr(e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1"))}
              width="255px"
              textAlign="right"
            />
            <span clanssName="body-1" style={{ color: `${GRAY900}`, marginLeft: "12px" }}>
              건
            </span>
          </Row>
        </Column>
        {totalErr && (
          <div className="chart-wrapper">
            <div className="chart-label">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="11" height="11" fill="#FBFBFB" stroke="#C8C8C8" />
                </svg>
                <span className="caption"> 발생한 오류 건수</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="11"
                    height="11"
                    fill={getBorderColor(percent)}
                    fillOpacity="0.16"
                    stroke={getBorderColor(percent)}
                  />
                </svg>
                <span className="caption"> 해결한 오류 건수</span>
              </div>
            </div>
            <div className="chart-result">
              <span className="caption">QA 진행률</span>
              <Percent className="headline-45" color={getBorderColor(percent)}>
                {percent}%
              </Percent>
            </div>
            <Doughnut
              className="dougnut"
              data={{
                labels: ["해결한 오류건수", "발생한 오류건수"],
                datasets: [
                  {
                    label: "Doughnut chart",
                    data: [
                      completedErr,
                      Number(totalErr) - Number(completedErr) <= 0 ? 0 : Number(totalErr) - Number(completedErr),
                    ],
                    backgroundColor: [getBackgroundColor(percent), "white"],
                    borderColor: [getBorderColor(percent), "#C8C8C8"],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        )}
      </Row>
    </Wrapper>
  );
};

export default QaTestResult;
