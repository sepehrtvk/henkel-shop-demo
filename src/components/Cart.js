import React, { useContext, useEffect, useState } from "react";
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
import { getBasket } from "./basket/BasketService";
import AuthContext from "../context/auth-context";
import Loading from "./shared/Loading";

const Cart = () => {
  const { state, dispatch } = useContext(CartContextProvider);
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getBasketFunction = async () => {
      setIsLoading(true);
      const response = await getBasket({
        CustomerId: localStorage.getItem("CustomerId"),
        CustomerGroupId: localStorage.getItem("CustomerGroupId"),
      });
      if (response.data.length > 0)
        response.data[0].items.map((item) => {
          if (item.qty > 0) dispatch({ type: "ADD_QTY", payload: item });
        });
      setIsLoading(false);
    };
    if (authCtx.isLoggedIn) getBasketFunction();
    else dispatch({ type: "CHECKED_OUT" });
  }, []);
  if (isLoading) return <Loading />;

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
                  key={product.product.productId}
                  productData={product.product}
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
              nextPage='preview'
            />
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
