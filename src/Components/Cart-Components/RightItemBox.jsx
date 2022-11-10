import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdLocalOffer } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import Button from "./Button";

const RightItemBox = () => {
  return (
    <Box>
      <OffersAndCuppons>
        <BaseHeader>OFFERS & CUPONS</BaseHeader>
        <BagOffer>
          <TbDiscount2 />
          <span>3 Offers On Your Bag</span>
          <MdKeyboardArrowRight />
        </BagOffer>
        <SpaceBetween>
          <div>
            <MdLocalOffer />
            <b>Apply Coupons</b>
          </div>
          <Button
            color={"red"}
            border="1px solid red"
            bgColor={"none"}
            padding={"12px"}
            fsize={"13px"}
            fweight={600}
            text="APPLY"
          />
        </SpaceBetween>
      </OffersAndCuppons>
      <hr />
      <GiftSection>
        <BaseHeader>GIFTING & PERSONALISATION</BaseHeader>
        <PinkBox>
          <ImageRibbon src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" />
          <p>
            <b>Buying for loved one?</b>
          </p>
          <p>Gift wrap and personalised message on card Only for ₹25</p>
          <Text color="rgb(255 63 108)" margin={"10px 0"}>
            <b>ADD GIFT WRAP</b>
          </Text>
        </PinkBox>
      </GiftSection>

      <hr />

      <PriceDetails>
        <BaseHeader>Price Details (5 Items)</BaseHeader>
        <div>
          <ToLeft>Total MRP</ToLeft>
          <ToRight>₹ 9854</ToRight>
        </div>
        <div>
          <ToLeft>Discount on MRP</ToLeft>
          <ToRight>
            <Text color="green">-₹ 3650</Text>
          </ToRight>
        </div>
        <div>
          <ToLeft>Coupon Discount</ToLeft>
          <ToRight>{<Text color="rgb(255 63 108)">Apply Coupon</Text>}</ToRight>
        </div>
        <div>
          <ToLeft>Convenience Fee</ToLeft>
          <ToRight>
            <span>
              <TextLineThrough>99</TextLineThrough>
            </span>
            <span>
              <Text color="green">FREE</Text>
            </span>
          </ToRight>
        </div>
      </PriceDetails>
      <hr />
      <TotalPriceBox>
        <ToLeft>Total Amount</ToLeft>
        <ToRight>9854</ToRight>
      </TotalPriceBox>
      <div>
        <Button
          color={"white"}
          border="none"
          width={"100%"}
          text="PLACE ORDER"
          padding={"7px"}
          fsize="14px"
          bgColor={"rgb(255 63 108)"}
        />
      </div>
    </Box>
  );
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

const OffersAndCuppons = styled.div``;

const BagOffer = styled.div`
  background-color: #fff6f4;
  padding: 15px;
  border-radius: 4px;
`;

const PinkBox = styled.div`
  background-color: #fff6f4;
  padding: 20px;
  padding-left: 20%;
  position: relative;
`;

const ImageRibbon = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  left: 5%;
`;

const Text = styled.div`
  color: ${(color) => color.color};
  margin: ${(margin) => margin.margin};
`;

const BaseHeader = styled.div`
  color: #535766;
  font-weight: bold;
`;

const GiftSection = styled.div``;

const PriceDetails = styled.div`
  & > * {
    margin: 15px auto;
  }
`;

const ToLeft = styled.span``;
const ToRight = styled.span`
  float: right;
  & * {
    display: inline;
  }
`;

const TextLineThrough = styled.span`
  text-decoration: line-through;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalPriceBox = styled.div`
  font-weight: bold;
  & * {
    font-weight: bold;
  }
`;

export default RightItemBox;
