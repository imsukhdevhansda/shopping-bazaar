import React from "react";
import style from "../Styles/men.module.css";
import { BiChevronDown } from "react-icons/bi";

function Products() {
  let productSort1Options = ["Bundles", "Country of Origin", "Size"];

  let productSort2OptionsArr = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price High to Low",
    "Price Low to High",
    "Customer Rating"
  ];

  return (
    <div className={style.uniqueProducts}>
      <div className={style.productSort}>
        <div className={style.productSort1}>
          {productSort1Options &&
            productSort1Options.map((item, id) => {
              return (
                <label className={style.productSortOption} key={id}>
                  <span>{item}</span>
                  <span>
                    <BiChevronDown
                      style={{ fontSize: "25px", color: "grey" }}
                    />
                  </span>
                </label>
              );
            })}

          {/* <label className={style.productSortOption} >
          
            <span>Bundles</span>
            <span>
              <BiChevronDown style={{ fontSize: "25px", color: "grey" }} />
            </span>
          </label> */}
        </div>
        <div className={style.productSort2Parent}>
          <div className={style.productSort2}>
            <span className={style.productSort2SortBy}>Sort by :</span>
            <span className={style.productSort2Recomm}>Recommended</span>
            <BiChevronDown
              style={{ fontSize: "30px", color: "grey", marginLeft: "35px" }}
            />
          </div>

          <div className={style.productSort2Options}>
            {productSort2OptionsArr.map((item,id)=> {
              return (
                <option value="" className={`${style.productSort2Select}`} key={id} >
                  {item}
                </option>
              );
            })}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
