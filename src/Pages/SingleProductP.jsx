import React, { useState } from "react";
import styles from "../Styles/singleProductP.module.css";
import { BsFillStarFill, BsFillBagFill, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { getLocalData } from "../Utils/helperFuns";
import { addToCart, addToWishList } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import Toast from "../Components/Cart-Components/Toast";

function SingleProductP() {
  const [toastData, setToastData] = useState(null);
  const { cart, wishlist } = useSelector((store) => store.AuthReducer);
  let p = getLocalData("singlePageData");

  const dispatch = useDispatch();

  let productSize = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];

  const handleAddCart = () => {
    // console.log(p);
    const isAvailable = cart.find(
      (item) => item.product_base_href === p.product_base_href
    );

    if (!isAvailable) {
      dispatch(addToCart(p));
      // alert("Added to bag Successfully 😊");
      setToastData({ msg: "Added to bag Successfully 😊", type: "success" });
      setTimeout(() => {
        setToastData(null);
      }, 2000);
    } else {
      setToastData({ msg: "Item already in Bag 😁", type: "warning" });
      setTimeout(() => {
        setToastData(null);
      }, 2000);
    }
  };

  const handleAddWishlist = () => {
    const isAvailable = wishlist.find(
      (item) => item.product_base_href === p.product_base_href
    );
    if (!isAvailable) {
      dispatch(addToWishList(p));
      // alert("Added to wishlist Successfully 😊");
      setToastData({
        msg: "Added to wishlist Successfully 😊",
        type: "success",
      });
      setTimeout(() => {
        setToastData(null);
      }, 2000);
    } else {
      setToastData({ msg: "Item already in Wishlist 😁", type: "warning" });
      setTimeout(() => {
        setToastData(null);
      }, 2000);
    }
  };

  return (
    <>
      <Toast message={toastData?.msg} type={toastData?.type} />
      <Navbar />
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

            <span className={styles.sppDetailsTax}>
              {" "}
              inclusive of all taxes{" "}
            </span>

            <div className={styles.sppSize}>
              {" "}
              <span>SELECT SIZE</span>
              <span>
                SIZE CHART{" "}
                <AiOutlineRight
                  style={{ fontSize: "13px", display: "inline" }}
                />{" "}
              </span>{" "}
            </div>

            <div className={styles.sppSizeList}>
              {productSize.map((size, id) => (
                <button key={id}> {size}</button>
              ))}
            </div>

            <button className={styles.sppAddToBag} onClick={handleAddCart}>
              {" "}
              <BsFillBagFill
                style={{ marginRight: "10px", display: "inline" }}
              />{" "}
              ADD TO BAG
            </button>
            <button className={styles.sppWishlist} onClick={handleAddWishlist}>
              {" "}
              <BsFillHeartFill style={{ marginRight: "10px" }} /> WISHLIST
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProductP;
