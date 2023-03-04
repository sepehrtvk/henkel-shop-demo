import React, { useContext, useState } from "react";

//Styles
import styles from "./ProductDetails.module.css";

//Context
import { CartContextProvider } from "../../context/CartContext";

//Function
import { quantityItem, isInCart } from "../../helper/function";

import noImage from "../../assets/img/no-image.jpeg";
import AddToBasket from "../basket/AddToBasket";

const ProductDetails = ({ data }) => {
  const rateHandler = (rateCount) => {
    for (let i = 0; i < rateCount; i++) {
      const rateX = (rateCount / 5) * 100;
      const rateY = `${(rateX / 10) * 10}%`;
      return rateY;
    }
  };

  const discountHandler = (discount, price) => {
    const decimal = discount / 100;
    const discountNum = decimal * price;
    const newPrice = price - discountNum;
    return newPrice.toLocaleString();
  };

  const { state, dispatch } = useContext(CartContextProvider);

  const [sizes, setSizes] = useState("");
  return (
    <div className={styles.productDetails}>
      <div className={styles.productImage}>
        {data.image && (
          <img
            src={"http://5.202.179.236:8282" + data.image}
            alt='productImage'
          />
        )}
        {!data.image && <img src={noImage} alt='productImage' />}
        <span className={styles.addToFavorite}>
          <i className='fas fa-heart'></i>
        </span>
        <span className={styles.share}>
          <i className='fas fa-share-alt'></i>
        </span>
      </div>
      <div className={styles.details}>
        <div className={styles.rightDetails}>
          <h2 className={styles.title}>{data.name}</h2>
          <small className={styles.category}>{data.productGroupName}</small>
          <div className={styles.rate}>
            <div
              className={styles.rating}
              style={{ width: `${rateHandler(4)}` }}></div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <span>موجودی : </span>
            <span>{data.onHandQty.toLocaleString()}</span>
          </div>
        </div>
        <div className={styles.leftDetails}>
          <div className={styles.buy}>
            <div className={styles.price}>
              <p>قیمت :</p>
              <p>{data.finalPrice.toLocaleString()}</p>
            </div>
            <div className={styles.discount}>
              <p>تخفیف :</p>
              <p>{data.discountPercent} %</p>
            </div>
            <div className={styles.totalPrice}>
              <p>قیمت با احتساب تخفیف :</p>
              <p>{discountHandler(data.discountPercent, data.price)}</p>
            </div>
            <div
              className={
                isInCart(state, data.productId)
                  ? styles.plusMinusProduct
                  : styles.addToCart
              }>
              {isInCart(state, data.productId) ? (
                <AddToBasket
                  dispatch={dispatch}
                  state={state}
                  productData={data}
                />
              ) : (
                <button
                  className={styles.addToCartBtn}
                  onClick={() =>
                    dispatch({
                      type: "ADD_ITEM",
                      payload: { product: data },
                      size: 1,
                    })
                  }>
                  افزودن به سبد خرید
                </button>
              )}
              {/* {quantityItem(state, data.productId) > 0 && (
                <span className={styles.quantity}>
                  {quantityItem(state, data.productId)}
                </span>
              )}
              {quantityItem(state, data.productId) === 1 && (
                <button
                  className={styles.trashBtn}
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }>
                  <i className='far fa-trash-alt'></i>
                </button>
              )}
              {quantityItem(state, data.productId) > 1 && (
                <button
                  className={styles.smallBtn}
                  onClick={() =>
                    dispatch({ type: "MINUS_ONE", payload: data })
                  }>
                  <i className='fas fa-minus'></i>
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
