import React from "react";
import styles from "../Styles/singleProductP.module.css";
import { BsFillStarFill, BsFillBagFill, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { getLocalData } from "../Utils/helperFuns";
import { addToCart, addToWishList } from "../Redux/AuthReducer/action";

function SingleProductP() {
  let p = getLocalData("singlePageData");

  let productSize = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const handleAddCart = () => {
    // console.log(p);

    addToCart(p);
    alert("Product Added Successfully")
  };

  const handleAddWishlist = () => {
    addToWishList(p);
     alert("Product Added Successfully");
  };

  return (
    <div className={styles.SingleProductP}>
      <div className={styles.spLocation}>
        <span>Home / </span>
        <span> Clothing / </span>
        <span> Men Clothing /</span>
        <span> Tshirts / </span>
        <span>Roadster Tshirts </span>
        <span> {">"} </span>
        <span>More By Roadster</span>
      </div>

      <div className={styles.sppDiv}>
        <div className={styles.sppImgDiv}>
          <img src={p.img_responsive_src} style={{ width: "100%" }} alt="" />
        </div>
        <div className={styles.sppDetails}>
          <h1 className={styles.sppDetailsHead}>{p.product_brand}</h1>
          <h1 className={styles.sppDetailsTitle}>{p.product_product}</h1>

          <div className={styles.sppDetailsRatings}>
            <span>{p.product_ratingsContainer}</span>
            <span>
              {" "}
              <BsFillStarFill style={{ color: "teal" }} />{" "}
            </span>
            <span>|</span>
            <span>{p.product_ratingsCount} Ratings</span>
          </div>
          <hr className={styles.sppDetailsSeprator1} />

          <div className={styles.sppDetailsPrices}>
            <strong style={{ fontSize: "20px" }}>
              ₹{p.product_discountedPrice}
            </strong>
            <span className={styles.sppDetailsStrick}>
              {" "}
              MRP {`₹${p.product_strike}`}
            </span>
            <span className={styles.sppDiscountPercentage}>
              {p.product_discountPercentage}
            </span>
          </div>

          <span className={styles.sppDetailsTax}> inclusive of all taxes </span>

          <div className={styles.sppSize}>
            {" "}
            <span>SELECT SIZE</span>
            <span>
              SIZE CHART <AiOutlineRight style={{ fontSize: "13px" }} />{" "}
            </span>{" "}
          </div>

          <div className={styles.sppSizeList}>
            {productSize.map((size, id) => (
              <button key={id}> {size}</button>
            ))}
          </div>

          <button className={styles.sppAddToBag} onClick={handleAddCart}>
            {" "}
            <BsFillBagFill style={{ marginRight: "10px" }} /> ADD TO BAG
          </button>
          <button className={styles.sppWishlist} onClick={handleAddWishlist}>
            {" "}
            <BsFillHeartFill style={{ marginRight: "10px" }} /> WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductP;
