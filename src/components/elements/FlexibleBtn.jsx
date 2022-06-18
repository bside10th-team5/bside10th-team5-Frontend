// TODO: 아직쓸일없어서 만들다가 맘
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GRAY900 } from "../../styles/theme";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${GRAY900};
  padding: 0 2rem;
  width: fit-content;
  height: 3rem;
`;

const FlexibleBtn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default FlexibleBtn;

FlexibleBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
