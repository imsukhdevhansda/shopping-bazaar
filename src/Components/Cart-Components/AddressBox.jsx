import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import PopUpMenu from "./PopUpMenu";
import ContentDetails from "./ContentDetails";
import { MdClose } from "react-icons/md";
import { Text } from "./StyledComponents";

const AddressBox = ({ pinCode }) => {
  const [popUp, setPopUp] = useState(false);

  const handleAddressChange = () => {
    setPopUp(true);
  };

  // console.log("pinCode:", pinCode);
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
        onClick={handleAddressChange}
        color={"red"}
        border="1px solid red"
        bgColor={"none"}
        padding={"12px"}
        fsize={"13px"}
        fweight={600}
        text={pinCode ? "CHANGE ADDRESS" : "ENTER PIN CODE"}
      />
      {popUp && (
        <PopUpMenu>
          <Wrapper>
            <MdClose onClick={() => setPopUp(false)} />
            <ContentDetails setPopUp={setPopUp} />
          </Wrapper>
        </PopUpMenu>
      )}
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
const Wrapper = styled.div`
  background-color: white;
  width: 350px;
  margin: 5% auto auto auto;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  & > svg {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default AddressBox;
