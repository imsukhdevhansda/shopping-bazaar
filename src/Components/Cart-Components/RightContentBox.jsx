import React from "react";
import styled from "styled-components";

const RightContentBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  vertical-align: top;
  border-top: 1px solid #eaeaec;
  width: 45%;
  padding: 5px 30px 10px 15px;
  display: inline-block;
  margin-bottom: 30px;
  & > * {
    max-width: 480px;
    width: 100%;
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    display: block;
    margin: auto;
    width: 480px;
    max-width: 100%;
  }
`;

export default RightContentBox;
