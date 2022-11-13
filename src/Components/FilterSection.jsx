import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "../Styles/men.module.css";

function FilterSection({ title, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brandc, setBrandc] = useState([]);
  const [discountsc, setDiscountsc] = useState([]);

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

  const handleCategory = (e) => {
    // console.log(e.target.value);
    let value = e.target.value;

    if (discounts.includes(value)) {
      // console.log("Yes Include");
      // if(value === "10% and above"){
      //   if( discountsc.length >0 &&discountsc[1]=== value){
      //     setDiscountsc([]);
      //   }else{
      //     let dis = ["(58% OFF)"];
      //     setDiscountsc()
      //   }
      // }
    } else if (brands.includes(value)) {
      // console.log("Yes brands")

      let newBrandc = [...brandc];

      if (newBrandc.includes(value)) {
        newBrandc.splice(newBrandc.indexOf(value), 1);
      } else {
        newBrandc.push(value);
      }
      setBrandc(newBrandc);
    }
  };

  useEffect(() => {
    const params = {};
    brandc && (params.product_brand = brandc);
    //  sortBy && (params.sortBy = sortBy);

    setSearchParams(params);
  }, [brandc]);

  // console.log(brandc);

    // console.log(searchParams.getAll("product_brand"));
  // console.log(searchParams)

  return (
    <div className={style.filterCategory}>
      <span className={style.categoryHead}> {title}</span>

      {options &&
        options.map((item, id) => {
          return (
            <label className={style.categoryItem} key={id}>
              <input
                type="checkbox"
                className={style.categoryInput}
                value={item.option}
                onChange={handleCategory}
              />
              {item.bg ? (
                <span
                  className={`${style.categoryColor} ${style[item.bgColor]}  `}
                ></span>
              ) : null}
              <span className={style.categoryItemTitle}>{item.option}</span>
            </label>
          );
        })}
    </div>
  );
}

export default FilterSection;
