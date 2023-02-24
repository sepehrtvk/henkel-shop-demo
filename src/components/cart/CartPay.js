import React from "react";
import { useNavigate } from "react-router-dom";
import { checkout } from "../basket/BasketService";

//Styles
import styles from "./CartPay.module.css";

const CartPay = ({ data, dispatch, notify, nextPage }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.pay}>
      {nextPage != "checkout" && (
        <div className={styles.price}>
          <p>قیمت کالاها</p>
          <p>{data.total.toLocaleString()} تومان</p>
        </div>
      )}

      {nextPage == "checkout" && (
        <div className={styles.price}>
          <p style={{ fontFamily: "iranyekan" }}>
            تعداد کالا:
            {data.length.toLocaleString()}{" "}
          </p>
          <p>
            جمع اقلام:
            {data
              .map((item) => {
                if (item.isPrize) return item.qty;
                else return item.qty * item.unitInfo.convertFactor;
              })
              .reduce((a, b) => a + b)
              .toLocaleString()}{" "}
          </p>
        </div>
      )}
      {nextPage == "checkout" && (
        <div className={styles.price}>
          <p>اضافه </p>
          <p>
            {data
              .map((item) => item.addAmount)
              .reduce((v1, v2) => v1 + v2)
              .toLocaleString()}{" "}
            تومان
          </p>
        </div>
      )}
      {nextPage == "checkout" && (
        <div className={styles.price}>
          <p>تخفیف </p>
          <p>
            {data
              .map((item) => item.discountAmount)
              .reduce((v1, v2) => v1 + v2)
              .toLocaleString()}{" "}
            تومان
          </p>
        </div>
      )}

      {nextPage == "checkout" && (
        <div
          className={styles.price}
          style={{ borderTop: "1px solid gray", paddingTop: "15px" }}>
          <p>قابل پرداخت </p>
          <p>
            {data
              .map((item) => item.netAmount)
              .reduce((price, total) => total + price)
              .toLocaleString()}{" "}
            تومان
          </p>
        </div>
      )}

      {nextPage == "preview" && (
        <button
          className={styles.payBtn}
          onClick={() => {
            // dispatch({ type: "CHECKED_OUT" });
            // notify();
            navigate("/preview");
          }}>
          پیش نمایش
        </button>
      )}
      {nextPage == "checkout" && (
        <button
          className={styles.payBtn}
          onClick={() => {
            checkout({
              CustomerId: localStorage.getItem("CustomerId"),
              CustomerGroupId: localStorage.getItem("CustomerGroupId"),
            })
              .then((res) => {
                dispatch({ type: "CHECKED_OUT" });
                notify("checkout");
              })
              .catch((err) => {
                notify("error", err.response.data.message);
              });
          }}>
          ارسال سفارش
        </button>
      )}
    </div>
  );
};

export default CartPay;
