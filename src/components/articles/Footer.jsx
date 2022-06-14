import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfb;
  color: #c8c8c8;
  border-top: 1px solid #dde0ea;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -1.5%;
`;

const Footer = () => {
  return <FooterWrapper>Copyright 2022. 자비없는형제들 All pictures cannot be copied without permission</FooterWrapper>;
};

export default Footer;
