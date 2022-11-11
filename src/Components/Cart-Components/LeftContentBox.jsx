import React from "react";
import styled from "styled-components";

const LeftContentBox = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  border-top: 1px solid #eaeaec;
  border-right: 1px solid #eaeaec;
  width: 55%;
  display: inline-block;
  margin-bottom: 30px;
  padding: 0 20px;
  & > * {
    max-width: 600px;
    width: 100%;
    margin: 20px 0;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    border-right: none;
    display: block;
    margin: auto;
    width: 480px;
    max-width: 100%;
  }
`;

export default LeftContentBox;
