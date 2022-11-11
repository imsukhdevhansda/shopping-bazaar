import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdLocalOffer } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import Button from "./Button";
import PriceDetails from "./PriceDetails";
import RightContentBox from "./RightContentBox";

const RightItemBox = () => {
  return (
    <RightContentBox>
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

      <PriceDetails />

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
    </RightContentBox>
  );
};

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

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RightItemBox;
