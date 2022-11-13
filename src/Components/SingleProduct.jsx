import React from "react";
import style from "../Styles/men.module.css";

function SingleProduct({
  img_responsive_src,
  product_brand,
  product_product,
  product_discountedPrice,
  product_strike,
  product_discountPercentage
}) {


// console.log(img_responsive_src);


  let p = {
    "product-base href":
      "https://www.myntra.com/tshirts/elegance/elegance-men-white--navy-blue-striped-polo-collar-t-shirt/18648872/buy",
    img_responsive_src:
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18648872/2022/6/6/36e7a096-89c3-417e-b878-bf79290177451654534063041ElegancemensCottonBlendPoloNeckStripertshirtFebric60cotton401.jpg",
    product_brand: "ELEGANCE",
    product_product: "Men Striped T-shirt",
    product_sizeInventoryPresent: "S,",
    "product_sizeInventoryPresent 2": "M,",
    "product_sizeInventoryPresent 3": "L,",
    "product_sizeInventoryPresent 4": "XL,",
    product_discountedPrice: "Rs. 455",
    product_strike: "Rs. 2399",
    product_discountPercentage: "(81% OFF)",
    product_sizeButton: "M",
    "product_sizeButton 2": "L",
    "product_sizeButton 3": "XL",
    "product_sizeButton 4": "XXL",
  };




  









  return (
    <div className={style.SingleProduct} style={{   }} >
      <div className={style.singleProductImgDiv}>
        <img
          src={img_responsive_src}
          alt=""
          className={style.singleProductImg}
        />
      </div>

      <div className={style.sPDetails}>
        <h3> {product_brand} </h3>
        <h4>{product_product}</h4>
        <div className={style.sPPrice}>
          <span className={style.product_discountedPrice}>
            {product_discountedPrice}
          </span>
          <span className={style.product_strike}>{product_strike}</span>
          <span className={style.product_discountPercentage}>
            {product_discountPercentage}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;







