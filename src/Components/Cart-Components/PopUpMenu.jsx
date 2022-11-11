import React from "react";
import styled from "styled-components";

const PopUpMenu = ({ children }) => {
  return <PopUpBackground>{children}</PopUpBackground>;
};

const PopUpBackground = styled.div`
  background-color: #00000090;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default PopUpMenu;
