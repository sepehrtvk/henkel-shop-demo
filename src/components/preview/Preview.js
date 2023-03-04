import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

//Styles
import styles from "./Preview.module.css";

//Components
import CartProducts from "../cart/CartProducts";
import CartPay from "../cart/CartPay";

//Context
import { CartContextProvider } from "../../context/CartContext";

//Images
import { notify } from "../../helper/function";
import { getBasketFullData } from "../basket/BasketService";
import Loading from "../shared/Loading";

const Preview = () => {
  const { state, dispatch } = useContext(CartContextProvider);
  const [previewItems, setPreviewItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getBasketFunction = () => {
      setIsLoading(true);
      getBasketFullData({
        CustomerId: localStorage.getItem("CustomerId"),
        CustomerGroupId: localStorage.getItem("CustomerGroupId"),
        IsPrizePreview: true,
      })
        .then((res) => {
          setPreviewItems(res.data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setTimeout(() => {
            notify(
              "error",
              err.response.data.message ? err.response.data.message : ""
            );
          }, 500);
        });
    };
    getBasketFunction();
  }, []);

  if (isLoading) return <Loading />;
  if (!previewItems.length) {
    return <div>خالی است. </div>;
  }
  return (
    <div className='container'>
      <div className={styles.cartPage}>
        <div className={previewItems.length ? styles.right : styles.center}>
          <div className={styles.CartProducts}>
            <div className={styles.header}>
              <h3>پیش نمایش</h3>
            </div>
            {previewItems.length &&
              previewItems.map((product) => (
                <CartProducts
                  key={product.product.productId}
                  productData={product.product}
                  preview={product}
                  dispatch={dispatch}
                  state={state}
                  isPreview={true}
                />
              ))}
          </div>
        </div>
        {previewItems.length && (
          <div className={styles.left}>
            <CartPay
              data={previewItems}
              nextPage='checkout'
              dispatch={dispatch}
              notify={notify}
            />
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Preview;
