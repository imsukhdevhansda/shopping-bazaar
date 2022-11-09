import React from "react";
import styled from "styled-components";
import Button from "./Button";

const AddressBox = ({ pinCode }) => {
  console.log("pinCode:", pinCode);
  return (
    <Box>
      <div>
        {pinCode ? (
          <p>Deliver to : {<b>{pinCode}</b>}</p>
        ) : (
          <b>Check Delivery time & services</b>
        )}
      </div>
      <Button
        color={"red"}
        border="1px solid red"
        bgColor={"none"}
        padding={"12px"}
        fsize={"13px"}
        fweight={600}
        text={pinCode ? "CHANGE ADDRESS" : "ENTER PIN CODE"}
      />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #eaeaec;
  border-radius: 4px;
`;

export default AddressBox;
