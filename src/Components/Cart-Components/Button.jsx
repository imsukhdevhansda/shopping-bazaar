import React from "react";
import styled from "styled-components";

const Button = ({
  border,
  color,
  text = "Button",
  bgColor,
  margin,
  padding,
  fsize,
  fweight,
  height,
  width,
  onClick,
  radius,
  children,
}) => {
  return (
    <Btn
      onClick={onClick}
      radius={radius}
      border={border}
      col={color}
      bgColor={bgColor}
      margin={margin}
      padding={padding}
      fsize={fsize}
      fweight={fweight}
      height={height}
      width={width}
    >
      {children || text}
    </Btn>
  );
};

const Btn = styled.button`
  cursor: pointer;
  border: ${(border) => border.border && border.border};
  color: ${(col) => col.col && col.col};
  background: ${(bgColor) => bgColor.bgColor && bgColor.bgColor};
  margin: ${(margin) => margin.margin && margin.margin};
  padding: ${(padding) => padding.padding && padding.padding};
  font-size: ${(fsize) => fsize.fsize && fsize.fsize};
  font-weight: ${(fweight) => fweight.fweight && fweight.fweight};
  width: ${(width) => width.width && width.width};
  height: ${(height) => height.height && height.height};
  border-radius: ${(style) => style.radius && style.radius};
`;

export default Button;
