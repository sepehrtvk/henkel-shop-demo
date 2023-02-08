import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Styles
import styles from "./Cart.module.css";

//Components
import CartProducts from "./cart/CartProducts";
import CartPay from "./cart/CartPay";

//Context
import { CartContextProvider } from "../context/CartContext";

//Images
import cartEmpty from "../assets/img/empty-cart.svg";
import { notify } from "../helper/function";

const Cart = () => {
  const { state, dispatch } = useContext(CartContextProvider);
  return (
    <div className='container'>
      <div className={styles.cartPage}>
        <div
          className={state.selectedItem.length ? styles.right : styles.center}>
          <div className={styles.CartProducts}>
            <div className={styles.header}>
              <h3>سبد خرید شما</h3>
              <small>{state.itemCounter} کالا</small>
            </div>
            {state.selectedItem.length ? (
              state.selectedItem.map((product) => (
                <CartProducts
                  key={product.id}
                  productData={product}
                  dispatch={dispatch}
                  state={state}
                />
              ))
            ) : (
              <div className={styles.empty}>
                <img src={cartEmpty} alt='trahs' />
                <h3>سبد خرید شما خالی است.</h3>
                <Link to='/shop'>فروشگاه </Link>
              </div>
            )}
          </div>
        </div>
        {state.total > 0 && (
          <div className={styles.left}>
            <CartPay
              data={state}
              dispatch={dispatch}
              notify={notify.bind(this, "checkout")}
            />
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
