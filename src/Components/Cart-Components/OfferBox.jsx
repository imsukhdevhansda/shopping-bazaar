import React, { useState } from "react";
import styled from "styled-components";
import { TbDiscount2 } from "react-icons/tb";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const offerLists = [
  "10% Instant Discount on IDFC FIRST Credit and Debit Cards on a min spend of Rs 2,500. TCA",
  "5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA",
  "5% Cashback on Paytm Postpaid transactions on a min spend of Rs 1,500. TCA",
  "10% Cashback upto Rs 100 on Ola Money Postpaid or Wallet transaction on a min spend of Rs 1000 . TCA",
  "Upto Rs 750 Cashback on Mobikwik Wallet Transactions on a min spend of Rs 2,000.Use code MBK750 on Mobikwik.TCA",
  "10% Cashback upto Rs 150 on Freecharge Paylater transaction. TCA",
  "5% Cashback upto Rs 75 on a minimum spend of Rs 1,500 with PayZapp. TCA",
];

const OfferBox = () => {
  const [showMoreOffer, setShowMoreOffer] = useState(false);
  return (
    <OfferContainer>
      <div>
        <TbDiscount2 />
        <b>Available Offers</b>
      </div>
      <ListContainer>
        <li>{offerLists[0]}</li>
        {showMoreOffer &&
          offerLists.map((lists, index) => {
            return index !== 0 && <li key={index}>{lists}</li>;
          })}
        <MoreOffer onClick={() => setShowMoreOffer(!showMoreOffer)}>
          {showMoreOffer ? "Show Less" : "Show More"}
          {showMoreOffer ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </MoreOffer>
      </ListContainer>
    </OfferContainer>
  );
};

const OfferContainer = styled.div`
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
`;

const ListContainer = styled.div`
  & > li {
    margin: 10px;
    line-height: 1.7;
  }
`;

const MoreOffer = styled.div`
  color: red;
  cursor: pointer;
`;

export default OfferBox;
