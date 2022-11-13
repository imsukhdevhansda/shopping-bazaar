import React from "react";
import style from "../Styles/men.module.css";

function SingleProduct({
  img_responsive_src,
  product_brand,
  product_product,
  product_discountedPrice,
  product_strike,
  product_discountPercentage,
}) {
  return (
    <div className={style.SingleProduct} style={{}}>
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
