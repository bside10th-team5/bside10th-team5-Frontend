import React from "react";
import styled from "styled-components";
import { GRAY100, GRAY200, GRAY300 } from "../../styles/theme";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY200};
  color: ${GRAY300};
  border-top: 1px solid ${GRAY100};
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -1.5%;
`;

const Footer = () => {
  return <FooterWrapper>Copyright 2022. 자비없는형제들 All pictures cannot be copied without permission</FooterWrapper>;
};

export default Footer;
