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

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
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
        email: true,
        password: true,
      });
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>فرم ورود</h2>
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
        <div className={styles.formButtons}>
          <button>ورود</button>
          <Link to="/signup">ثبت نام</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
