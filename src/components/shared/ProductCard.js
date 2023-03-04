import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./ProductCard.module.css";

//Functions
import { discountHandler } from "../../helper/function";
import { rateHandler } from "../../helper/function";

import noImage from "../../assets/img/no-image.jpeg";
const ProductCard = ({ data }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImage}>
        {data.image && (
          <img
            src={"http://5.202.179.236:8282" + data.image}
            alt='photo'
            height={"250px"}
          />
        )}

        {!data.image && <img src={noImage} alt='photo' height={"260px"} />}

        {data.discount > 0 && (
          <span className={styles.discount}>{data.discount}%</span>
        )}
      </div>
      <div className={styles.cardTitle}>
        <h3>{data.name}</h3>
        <small>{data.productGroupName}</small>
      </div>
      <div className={styles.productInfo}>
        {/* <div className={styles.star}>
          <div
            className={styles.rating}
            style={{ width: `${rateHandler(data.rate)}` }}></div>
        </div> */}
        <div className={styles.prieContainer}>
          <p className={data.discount ? styles.oldPrice : styles.price}>
            <span>موجودی : </span>
            {data.onHandQty}
          </p>
          <p className={data.discount ? styles.oldPrice : styles.price}>
            <span>قیمت : </span>
            {data.finalPrice.toLocaleString()} <span>تومان</span>
          </p>
          {data.discount > 0 && (
            <p className={styles.price}>
              {discountHandler(data.discount, data.price)} <span>تومان</span>
            </p>
          )}
        </div>
      </div>
      <Link
        to={`/products/${data.productId}`}
        className={styles.productDetails}>
        مشاهده محصول
      </Link>
    </div>
  );
};

export default ProductCard;
