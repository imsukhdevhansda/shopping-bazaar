import React from 'react'
import styles from "../Styles/singleProductP.module.css";
import { BsFillStarFill, BsFillBagFill, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";


function SingleProductP() {








   let p = {
     product_ratingsContainer: 4.2,
     product_ratingsCount: "19.7k",
     "product-separator": "|",
     "product-base href":
       "https://www.myntra.com/tshirts/roadster/roadster-men-black-cotton-pure-cotton-t-shirt/1996777/buy",
     img_responsive_src:
       "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2017/11/7/11510046815508-Roadster-Men-Black-Solid-Round-Neck-T-shirt-4011510046815294-1.jpg",
     product_brand: "Roadster",
     product_product: "Men Cotton Pure Cotton T-shirt",
     product_sizeInventoryPresent: "XS,",
     product_sizeInventoryPresent_2: "S,",
     product_sizeInventoryPresent_3: "M,",
     product_sizeInventoryPresent_4: "L,",
     product_sizeInventoryPresent_5: "XL,",
     product_sizeInventoryPresent_6: "XXL,",
     product_sizeInventoryPresent_7: "3XL,",
     product_sizeInventoryPresent_8: "4XL",
     product_discountedPrice: "Rs. 199",
     product_strike: "Rs. 499",
     product_discountPercentage: "(60% OFF)",
     product_sizeButton: "S",
     product_sizeButton_2: "M",
     product_sizeButton_3: "L",
     product_sizeButton_4: "XL",
     product_sizeButton_5: "",
     product_sizeButton_6: "",
   };


   let productSize = ["XS","S","M","L","XL","XXL","3XL","4XL"];





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
            {productSize.map((size) => (
              <button> {size}</button>
            ))}
          </div>

          <button className={styles.sppAddToBag}>
            {" "}
            <BsFillBagFill style={{ marginRight: "10px" }} /> ADD TO BAG
          </button>
          <button className={styles.sppWishlist}>
            {" "}
            <BsFillHeartFill style={{ marginRight: "10px",}} /> WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProductP