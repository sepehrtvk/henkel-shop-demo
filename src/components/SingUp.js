import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//Validation from
import validate from "./security/formValidate";

//Styles
import styles from "./SingUp.module.css";
import "react-toastify/dist/ReactToastify.css";

//Functions
import { notify } from "../helper/function";


const SingUp = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data , "signup"));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("seccus");
      window.location.pathname ="/";
    } else {
      notify("error");
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>فرم ثبت نام</h2>
        <div className={styles.formBox}>
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.name && touch.name ? styles.unValidate : styles.validate
            }
          />
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formBox}>
          <label>پست الکترونیکی</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.email && touch.email ? styles.unValidate : styles.validate
            }
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formBox}>
          <label>رمزعبور</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.password && touch.password
                ? styles.unValidate
                : styles.validate
            }
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div className={styles.formBox}>
          <label>تکرار رمزعبور</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            className={
              errors.confirmPassword && touch.confirmPassword
                ? styles.unValidate
                : styles.validate
            }
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formBox}>
          <div className={styles.checkeboxContainer}>
            
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onFocus={focusHandler}
              onChange={changeHandler}
              id="accepted"
              className={
                errors.isAccepted && touch.isAccepted
                  ? styles.unValidate
                  : styles.validate
              }
            />
            <label htmlFor="accepted">تمامی قوانین و مقررات را قبول دارم.</label>
          </div>
          {errors.isAccepted && touch.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <button>ثبت نام</button>
          <Link to="/login">ورود</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
