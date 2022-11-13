import React, { useEffect, useState } from "react";
import style from "../Styles/men.module.css";
import { BiChevronDown } from "react-icons/bi";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsReducer/actionCreator";
import { useLocation, useSearchParams } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => {
    return { ...store.ProductsReducer };
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [sortBy,setSortBy] = useState(null)

  // console.log(products);

  let productSort1Options = ["Bundles", "Country of Origin", "Size"];

  let productSort2OptionsArr = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price High to Low",
    "Price Low to High",
    "Customer Rating",
  ];


  const handleSort = (e)=>{
    let value = e.target.value;
    console.log(value)
    value == "Price High to Low" ? setSortBy("desc") : setSortBy("asc");

  }




  useEffect(() => {
    if (location) {
      const product_brand = searchParams.getAll("product_brand");
      
      const queryParams = {
        params: {
          product_brand: product_brand,
          _order: sortBy && sortBy,
          _sort: "product_discountedPrice",
        },
      };

       dispatch(getProducts(queryParams));
    }
  }, [location.search,sortBy]);

  // console.log(location);

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
            {/* <span className={style.productSort2Recomm}>Recommended</span> */}
            <select
              name=""
              className={style.productSort2Recomm}
              onChange={handleSort}
            >
              {productSort2OptionsArr.map((item, id) => (
                <option value={item} key={id}>
                  {" "}
                  {item}{" "}
                </option>
              ))}
            </select>

            {/* <BiChevronDown
              style={{ fontSize: "30px", color: "grey", marginLeft: "35px" }}
            /> */}
          </div>

          {/* <div className={style.productSort2Options}>
            {productSort2OptionsArr.map((item, id) => {
              return (
                <option
                  value=""
                  className={`${style.productSort2Select}`}
                  key={id}
                >
                  {item}
                </option>
              );
            })}
          </div> */}
        </div>
      </div>
      <div className={style.productsDiv}>
        {products &&
          products.map((item, id) => <SingleProduct {...item} key={id} />)}
      </div>

      {/* <SingleProduct /> */}
    </div>
  );
}

export default Products;
