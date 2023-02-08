import React from "react";

//Styles
import styles from "./CartPay.module.css";

const CartPay = ({ data, dispatch, notify }) => {
  return (
    <div className={styles.pay}>
      <div className={styles.price}>
        <p>قیمت کالاها</p>
        <p>{data.total.toLocaleString()} تومان</p>
      </div>
      <div className={styles.totalPrice}>
        <p>جمع سبد خرید</p>
        <p>{data.total.toLocaleString()} تومان</p>
      </div>
      <small>
        هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود
      </small>
      <button
        className={styles.payBtn}
        onClick={() => {
          dispatch({ type: "CHECKED_OUT" });
          notify();
        }}>
        پرداخت
      </button>
    </div>
  );
};

export default CartPay;
