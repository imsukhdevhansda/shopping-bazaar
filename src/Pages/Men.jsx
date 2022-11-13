import React from "react";
import Filters from "../Components/Filters";
import Products from "../Components/Products";
import style from "../Styles/men.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";

function Men() {
  return (
    <>
      <Navbar />
      <div className={style.menPage}>
        <div className={style.menLocation}>
          <span>
            Home / Clothing / <b>Men T-Shirts</b>
          </span>
        </div>
        <div className={style.menLocation}>
          <span className={style.menCategory}>
            <b>Men T-Shirts</b> -{" "}
            <span className={style.menProductquantity}> 80908 items </span>
          </span>
        </div>

        <div className={style.menFilterAndProducts}>
          <Filters />
          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Men;
