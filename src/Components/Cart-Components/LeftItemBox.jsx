import React from "react";
import styled from "styled-components";
import AddressBox from "./AddressBox";
import Button from "./Button";
import CartItem from "./CartItem";
import ConvenienceBox from "./ConvenienceBox";
import OfferBox from "./OfferBox";
import { HiOutlineClipboardList } from "react-icons/hi";

const demoCartItem = [
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 1,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 2,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 3,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 4,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 5,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 6,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
  {
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14935572/2021/12/2/378b0fd7-9207-47b4-bdc7-05c035a4c73f1638420449785-Roadster-Burgundy-Striped-Gathered-Fitted-Top-82716384204491-1.jpg",
    brand: "Brand Name (manufacturer)",
    title: "Title Of the Product",
    sold_by: "Sold By (Seller)",
    id: 7,
    size: ["S", "M", "XL"],
    selected_size: "S",
    price: 785,
    mrp: 1520,
  },
];

const LeftItemBox = () => {
  return (
    <Box>
      <AddressBox pinCode={799264} />
      <OfferBox />
      <ConvenienceBox />
      <TotalItems>
        <b>Total Items: {5}</b>
      </TotalItems>
      {/* <CartItem /> */}
      {demoCartItem.length > 0 &&
        demoCartItem.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      <AddFromWishList>
        <HiOutlineClipboardList />
        <b>Add more from Wishlist</b>
      </AddFromWishList>
    </Box>
  );
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

const TotalItems = styled.div`
  padding: 16px;
`;

const AddFromWishList = styled.div`
  border: 1px solid #eaeaec;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
`;
export default LeftItemBox;
