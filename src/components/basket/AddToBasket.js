import React from "react";
import styles from "./AddToBasket.module.css";
import { quantityItem } from "../../helper/function";
import { useEffect, useState } from "react";

import { postBasket } from "./BasketService";
import Loading from "../shared/Loading";

const AddToBasket = ({ state, dispatch, productData }) => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const postBasketFunction = async () => {
      setloading(true);
      const response = await postBasket({
        items: state.selectedItem,
        CustomerId: localStorage.getItem("CustomerId"),
        CustomerGroupId: localStorage.getItem("CustomerGroupId"),
      });
      if (quantityItem(state, productData.productId) == 0) {
        dispatch({
          type: "REMOVE_ITEM",
          payload: { product: productData },
        });
      }
      setloading(false);
    };

    postBasketFunction();
  }, [quantityItem(state, productData.productId)]);

  return (
    <div className={styles.plusMinusProduct}>
      <button
        disabled={loading}
        className={styles.smallBtn}
        onClick={() =>
          dispatch({ type: "PLUS_ONE", payload: { product: productData } })
        }>
        <i className='fas fa-plus'></i>
      </button>
      <span className={styles.quantity}>
        {quantityItem(state, productData.productId)}
      </span>
      {quantityItem(state, productData.productId) === 1 && (
        <button
          disabled={loading}
          className={styles.trashBtn}
          onClick={() =>
            dispatch({
              type: "MINUS_ONE",
              payload: { product: productData },
            })
          }>
          <i className='far fa-trash-alt'></i>
        </button>
      )}
      {quantityItem(state, productData.productId) > 1 && (
        <button
          disabled={loading}
          className={styles.smallBtn}
          onClick={() =>
            dispatch({ type: "MINUS_ONE", payload: { product: productData } })
          }>
          <i className='fas fa-minus'></i>
        </button>
      )}
    </div>
  );
};

export default AddToBasket;
