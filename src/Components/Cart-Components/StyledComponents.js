import styled from "styled-components";

export const BaseHeader = styled.div`
  color: #535766;
  font-weight: bold;
`;

export const ToLeft = styled.span``;
export const ToRight = styled.span`
  float: right;
  & * {
    display: inline;
  }
`;
export const TextLineThrough = styled.span`
  text-decoration: line-through;
`;

export const TotalPriceBox = styled.div`
  font-weight: bold;
  & * {
    font-weight: bold;
  }
`;
export const Text = styled.div`
  color: ${(color) => color.color};
  margin: ${(margin) => margin.margin};
  font-size: ${(style) => style.fsize && style.fsize};
  font-weight: ${(style) => style.fweight && style.fweight};
`;
