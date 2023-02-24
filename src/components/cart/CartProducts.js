import React from "react";

//Styles
import styles from "./CartProducts.module.css";

import noImage from "../../assets/img/no-image.jpeg";
//Function
import { discountHandler, quantityItem } from "../../helper/function";
import AddToBasket from "../basket/AddToBasket";

const CartProducts = ({ productData, dispatch, state, isPreview, preview }) => {
  return (
    <div className={styles.products}>
      <div className={styles.info}>
        <div className={styles.image}>
          {productData.image && (
            <img
              src={
                productData.image.includes("http://77.238.123.10:12367")
                  ? productData.image
                  : "http://77.238.123.10:12367" + productData.image
              }
              alt={productData.name}
            />
          )}
          {!productData.image && <img src={noImage} alt='productImage' />}
        </div>
        <div className={isPreview ? styles.details : null}>
          <h3 className={styles.title}>{productData.name}</h3>
          <small className={styles.sizeOrColo}>
            {productData.productGroupName}
          </small>
          <div className={styles.prices}>
            {isPreview && (
              <p className={styles.newPrice}>
                <span>قابل پرداخت :‌ </span>
                {preview.totalNetAmount.toLocaleString()} <span>تومان</span>
              </p>
            )}
            {!isPreview && (
              <p className={styles.newPrice}>
                {productData.finalPrice.toLocaleString()} <span>تومان</span>
              </p>
            )}
          </div>
        </div>
        {isPreview && (
          <div className={styles.extra}>
            <div>
              <span>کد کالا : </span>
              <span className={styles.extraColor}>
                {productData.code.toLocaleString()}
              </span>
            </div>
            <div style={{ marginTop: "9px" }}>
              <span>تعداد : </span>
              <span style={{ marginLeft: "9px" }}>{preview.qty}</span>
              <span className={styles.extraColor}>({preview.unitLabel})</span>
            </div>
          </div>
        )}
        {isPreview && (
          <div className={styles.extra}>
            <div>
              <span>قیمت واحد : </span>
              <span className={styles.extraColor}>
                {preview.price.toLocaleString()}
              </span>
            </div>
            <div style={{ marginTop: "9px" }}>
              <span>تخفیف : </span>
              <span className={styles.extraColor}>
                {preview.totalDiscountAmount}
              </span>
            </div>
          </div>
        )}
        {isPreview && (
          <div className={styles.extra}>
            <div>
              <span>مبلغ ناخالص : </span>
              <span className={styles.extraColor}>
                {preview.totalAmount.toLocaleString()}
              </span>
            </div>
            <div style={{ marginTop: "9px" }}>
              <span>اضافه : </span>
              <span className={styles.extraColor}>
                {preview.totalAddAmount.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {!isPreview && (
        <AddToBasket
          state={state}
          dispatch={dispatch}
          productData={productData}
        />
      )}
    </div>
  );
};

export default CartProducts;
