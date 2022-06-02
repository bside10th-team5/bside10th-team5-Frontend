import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 0 2rem;
  width: fit-content;
  height: 3rem;
`;

const MediumBtn = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default MediumBtn;

MediumBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
