import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  position: relative;
  padding-left: 1rem;

  & input {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const RadioWithImg = ({ src, alt, name, value }) => {
  return (
    <Wrapper>
      <label>
        <input type="radio" name={name} value={value} />
        <img src={src} alt={alt} />
      </label>
    </Wrapper>
  );
};

export default RadioWithImg;

RadioWithImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};
