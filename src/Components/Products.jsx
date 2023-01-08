import React, { useEffect, useState } from "react";
import style from "../Styles/men.module.css";
import { BiChevronDown } from "react-icons/bi";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductsReducer/actionCreator";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { setLocalData } from "../Utils/helperFuns";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Products() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => {
    return { ...store.ProductsReducer };
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [sortBy, setSortBy] = useState(null);

  // console.log(products);
  console.log("loading:", isLoading);

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

  const handleSort = (e) => {
    let value = e.target.value;
    // console.log(value)
    value == "Price High to Low" ? setSortBy("desc") : setSortBy("asc");
  };

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
  }, [location.search, sortBy]);

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
        </div>
        <div className={style.productSort2Parent}>
          <div className={style.productSort2}>
            <span className={style.productSort2SortBy}>Sort by :</span>
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
          </div>
        </div>
      </div>
      <div className={style.productsDiv}>
        {products &&
          products.map((item, id) => {
            if (item.product_discountedPrice) {
              return (
                <Link
                  onClick={() => setLocalData("singlePageData", item)}
                  to={`/singleProduct/${item.product_discountedPrice}`}
                  className={style.singleProductLink}
                  key={id}
                >
                  <SingleProduct {...item} />
                </Link>
              );
            }
          })}
        {isLoading && (
          <div className={style.loading_container}>
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
