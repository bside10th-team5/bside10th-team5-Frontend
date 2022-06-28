import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GRAY300 } from "../../../styles/theme";

const DayTemplate = styled.div`
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid ${GRAY300};
  margin-bottom: 20px;
`;

const TemplateBlock = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DayTemplate className="headline-6">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "72px",
            padding: "20px 24px",
            borderBottom: "1px solid black",
          }}
        >
          <div>{type}</div>
          <div onClick={() => setIsOpen((el) => !el)}>{isOpen ? "닫기" : "열기"}</div>
        </div>
        {isOpen && (
          <div style={{ border: "1px solid black", height: "500px", margin: "20px 24px" }}>
            여기에 템플릿 별로 추가하면딤
          </div>
        )}
      </DayTemplate>
    </div>
  );
};

export default TemplateBlock;

TemplateBlock.propTypes = {
  type: PropTypes.string.isRequired,
};
