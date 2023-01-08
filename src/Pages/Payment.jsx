import React from "react";
import CartNav from "../Components/Cart-Components/CartNav";
import { BsFillPatchCheckFill } from "react-icons/bs";
import styled from "styled-components";
import LeftContentBox from "../Components/Cart-Components/LeftContentBox";
import RightContentBox from "../Components/Cart-Components/RightContentBox";
import PriceDetails from "../Components/Cart-Components/PriceDetails";
import { Text } from "../Components/Cart-Components/StyledComponents";
import { useState } from "react";
import {
  Input,
  InputContainer,
  InputLabel,
} from "../Components/Cart-Components/ContentDetails";
import Button from "../Components/Cart-Components/Button";
import { setCartEmpty } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";

const Payment = () => {
  const [capcha, setCapcha] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [activeTab, setActiveTab] = useState("cash");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    let isNotFilled =
      capcha != 12 &&
      (cardName.length === 0 ||
        cardNumber.length === 0 ||
        cardDate.length === 0 ||
        cardCvv.length === 0);
    if (!isNotFilled) {
      setTimeout(() => {
        setShowToast(true);
      }, 1000);
      setTimeout(() => {
        dispatch(setCartEmpty());
        // alert("Order Placed Success!");
        setShowToast(false);
        setOrderPlaced(true);
      }, 3000);
    }
  };
  const switTabs = (value) => {
    setActiveTab(value);
  };

  if (orderPlaced) {
    return <Navigate to={"/"} />;
  }
  return (
    <Container>
      <CartNav />
      {/* <Button onClick={() => setShowToast(!showToast)} text="Test Toast" /> */}
      <LeftContentBox>
        <Text fweight="bold">Choose Payment Mode</Text>
        <PaymentContent>
          <OptionTabs>
            <PaymentMode
              onClick={() => switTabs("cash")}
              background={activeTab === "cash" && "white"}
            >
              Cash On Delivery
            </PaymentMode>
            <PaymentMode
              onClick={() => switTabs("card")}
              background={activeTab === "card" && "white"}
            >
              Credit/Debit Card
            </PaymentMode>
          </OptionTabs>
          <PaymentBox
            disabled={
              capcha != 12 &&
              (cardName.length === 0 ||
                cardNumber.length === 0 ||
                cardDate.length === 0 ||
                cardCvv.length === 0)
            }
          >
            {/* For Cash on Delivery */}
            {activeTab === "cash" && (
              <>
                <Text fweight="bold">Pay on Delivery(Pay on Cash)</Text>
                <Text margin="10px 20px" fsize="22px">
                  7+5=?
                </Text>
                <InputContainer>
                  <InputLabel top={capcha.length} htmlFor="capcha">
                    Enter the Answer *
                  </InputLabel>
                  <Input
                    value={capcha}
                    onChange={(e) => setCapcha(e.target.value)}
                    type="number"
                    id="capcha"
                  />
                </InputContainer>
                <Text>
                  {" "}
                  You can pay via Cash or UPI enabled app at the time of
                  delivery. Ask your delivery executive for these options.{" "}
                </Text>
              </>
            )}
            {/* For Credit/Debit Card */}
            {activeTab === "card" && (
              <>
                <Text margin="0 0 10px 0" fweight="bold">
                  Credit Card/ Debit Card
                </Text>
                <Text margin="0 0 20px 0">
                  Please ensure your card can be used for online transactions.
                </Text>
                <InputContainer>
                  <InputLabel top={cardNumber.length} htmlFor="cardnumber">
                    Enter Card Number *
                  </InputLabel>
                  <Input
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    type="number"
                    id="cardNumber"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel top={cardName.length} htmlFor="cardname">
                    Name on Card *
                  </InputLabel>
                  <Input
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    type="name"
                    id="cardname"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel top={cardDate.length} htmlFor="carddate">
                    Valid Thru(MM/YY) *
                  </InputLabel>
                  <Input
                    value={cardDate}
                    onChange={(e) => setCardDate(e.target.value)}
                    type="text"
                    id="carddate"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel top={cardCvv.length} htmlFor="cardcvv">
                    CVV *
                  </InputLabel>
                  <Input
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value)}
                    type="number"
                    id="cardcvv"
                  />
                </InputContainer>
              </>
            )}
            <Button
              onClick={handlePlaceOrder}
              text="Confirm Order"
              margin="10px 0"
              padding={"5px"}
              radius="5px"
              width="100%"
              border={"none"}
              bgColor={"red"}
              color="white"
              fsize={"18px"}
            />
          </PaymentBox>
        </PaymentContent>
      </LeftContentBox>
      <RightContentBox>
        <PriceDetails />
      </RightContentBox>
      <ToastBox top={showToast ? "10px" : "-15%"}>
        <BsFillPatchCheckFill />
        <Text color="white" fsize="18px">
          Order Placed Success!
        </Text>
      </ToastBox>
    </Container>
  );
};

const Container = styled.div`
  font-size: 12px;
`;

const OptionTabs = styled.div`
  //   background-color: #80808030;
  flex-basis: 35%;
`;

const PaymentMode = styled.div`
  border: 1px solid grey;
  background-color: ${(style) =>
    style.background ? style.background : "#80808030"};
  color: ${(style) => style.background && "red"};
  font-weight: bold;
  padding: 10px 3px;
  cursor: pointer;
`;

const PaymentContent = styled.div`
  // border: 1px solid blue;
  display: flex;
`;

const PaymentBox = styled.div`
  // border: 1px solid red;
  width: calc(100% - 35%);
  padding: 15px;
  & > button {
    background-color: ${(style) => style.disabled === true && "grey"};
    cursor: ${(style) => style.disabled && "no-drop"};
  }
  & > ${InputContainer} {
    margin: 15px auto;
  }
`;

const ToastBox = styled.div`
  position: absolute;
  left: 50%;
  transition: 500ms linear;
  top: ${(style) => style.top};
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 246px;
  gap: 5px;
  background-color: #38a169;
  border-radius: 7px;
  & > svg {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
`;

export default Payment;
