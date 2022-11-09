import React from "react";
import styled from "styled-components";
import { FaShippingFast } from "react-icons/fa";

const ConvenienceBox = () => {
  return (
    <Container>
      <FaShippingFast />
      <span>
        Yay ! <b>No convenience fee</b> on this order.
      </span>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
`;

export default ConvenienceBox;
