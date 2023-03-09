import React from "react";
import styled from "styled-components";
import { MdError } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Toast = ({ message, type }) => {
  return (
    <ToastBox
      alertType={
        type === "fail" ? "red" : type === "warning" ? "#ff5722" : "#38a169"
      }
      top={message ? "10px" : "-15%"}
    >
      {type === "fail" ? (
        <MdError />
      ) : type === "warning" ? (
        <MdError />
      ) : (
        <BsFillPatchCheckFill />
      )}
      <div color="white" fsize="18px">
        {message}
      </div>
    </ToastBox>
  );
};

const ToastBox = styled.div`
  position: fixed;
  z-index: 9999;
  left: 50%;
  transition: 500ms linear;
  top: ${(style) => style.top};
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 246px;
  gap: 5px;
  background-color: ${(style) => style.alertType};
  border-radius: 7px;
  & > svg {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
  & > div {
    color: white;
    font-size: 18px;
  }
`;

export default Toast;
