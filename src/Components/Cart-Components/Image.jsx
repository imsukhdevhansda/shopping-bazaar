import React from "react";
import styled from "styled-components";

const Image = ({
  src,
  alt = "image",
  height = "auto",
  width = "auto",
  display = "inline",
}) => {
  return (
    <Img src={src} alt={alt} height={height} width={width} display={display} />
  );
};

const Img = styled.img`
  height: ${(height) => height.height && height.height};
  width: ${(width) => width.width && width.width};
  display: ${(display) => display.display && display.display};
`;

export default Image;
