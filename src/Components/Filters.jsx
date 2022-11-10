import React from "react";
import style from "../Styles/men.module.css";
import FilterSection from "./FilterSection";

function Filters() {
  let categoryItems = ["Tshirt", "Lounge Tshirts"];
  let brands = [
    "Roadster",
    "Puma",
    "WROGN",
    "U.S  Polo Assn.",
    "HRX by Hrithik Roshan",
    "max",
    "Frisker",
    "HERE&NOW",
  ];
  let prices = [
    "Rs. 169 to Rs. 2627",
    "Rs. 2627 to Rs. 5085",
    "Rs. 5085 to Rs. 7543",
    "Rs. 7543 to Rs. 10001",
  ];

  let discounts = [
    "10% and above",
    "20% and above",
    "30% and above",
    "40% and above",
    "50% and above",
    "60% and above",
    "70% and above",
    "80% and above",
  ];

  return (
    <div className={style.uniqueFilter}>
      <h4 className={style.filterHead}> FILTERS</h4>
      {/* <div className={style.filterCategory}>
        <span className={style.categoryHead}> CATEGORIES</span>

        {categoryItems &&
          categoryItems.map((item, id) => {
            return (
              <label className={style.categoryItem} key={id}>
                <input type="checkbox" className={style.categoryInput} />
                <span className={style.categoryItemTitle}>{item}</span>
              </label>
            );
          })}
      </div> */}

      {/* <div className={style.filterCategory}>
        <span className={style.categoryHead}> BRAND</span>
      </div> */}
      <FilterSection title="CATEGORY" options={categoryItems} />
      <FilterSection title="BRAND" options={brands} />
      <FilterSection title="PRICE" options={prices} />
      <FilterSection title="BRAND" options={brands} />
      <FilterSection title="DISCOUNT RANGE" options={discounts} />
    </div>
  );
}

export default Filters;
