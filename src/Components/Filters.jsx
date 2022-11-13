import React, { useState } from "react";
import style from "../Styles/men.module.css";
import FilterSection from "./FilterSection";

function Filters() {




  let categoryItems = [
    { option: "Tshirt", bg: false },
    { option: "Lounge Tshirts", bg: false },
   
  ];
  let brands = [
    { option: "Roadster", bg: false },
    { option: "Puma", bg: false },
    { option: "WROGN", bg: false },
    { option: "U.S  Polo Assn.", bg: false },
    { option: "HRX by Hrithik Roshan", bg: false },
    { option: "max", bg: false },
    { option: "Frisker", bg: false },
    { option: "HERE&NOW", bg: false },
  ];
  let prices = [
    { option: "Rs. 169 to Rs. 2627", bg: false },
    { option: "Rs. 2627 to Rs. 5085", bg: false },
    { option: "Rs. 5085 to Rs. 7543", bg: false },
    { option: "Rs. 7543 to Rs. 10001", bg: false },
  ];

  let discounts = [
    { option: "10% and above", bg: false },
    { option: "20% and above", bg: false },
    { option: "30% and above", bg: false },
    { option: "40% and above", bg: false },
    { option: "50% and above", bg: false },
    { option: "60% and above", bg: false },
    { option: "70% and above", bg: false },
    { option: "80% and above", bg: false },
  ];

  let colors = [
    { option: "Black", bg: true, bgColor: "bgColorBlack" },
    { option: "Blue", bg: true, bgColor: "bgColorBlue" },
    { option: "White", bg: true, bgColor: "bgColorWhite" },
    { option: "Navy Blue", bg: true, bgColor: "bgColorNavy" },
    { option: "Green", bg: true, bgColor: "bgColorGreen" },
    { option: "Red", bg: true, bgColor: "bgColorRed" },
    { option: "Grey", bg: true, bgColor: "bgColorGrey" },
  ];

  return (
    <div className={style.uniqueFilter}>
      <h4 className={style.filterHead}> FILTERS</h4>
      <FilterSection title="CATEGORY" options={categoryItems} />
      <FilterSection title="BRAND" options={brands} />
      <FilterSection title="PRICE" options={prices} />
      <FilterSection title="COLOR" options={colors} />
      <FilterSection title="DISCOUNT RANGE" options={discounts} />
    </div>
  );
}

export default Filters;
