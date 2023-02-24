import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
//Validation from
import validate from "./security/formValidate";
import Loading from "./shared/Loading";
//Styles
import styles from "./SingUp.module.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/auth-context";

//Functions
import { notify } from "../helper/function";
import { getUserInfo, loginByCode, requestCode } from "../services/api";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [step, setStep] = useState("phone");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

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
    setIsLoading(true);

    if (step == "phone") {
      if (errors.phone) {
        notify("error");
        setIsLoading(false);

        setTouch({
          email: true,
          password: true,
        });
        return;
      }

      requestCode({ userKey: data.phone })
        .then((res) => {
          setStep("code");
          setIsLoading(false);
        })
        .catch((err) => {
          notify("error", err.response.data.message);
          setIsLoading(false);
        });
    } else {
      loginByCode({
        userKey: data.phone,
        Code: data.password,
      })
        .then((res) => {
          notify("seccus");
          authCtx.login(res.token);
          navigate("/home");
          getUserInfo()
            .then((rees) => {
              console.log(rees);
              localStorage.setItem("CustomerId", rees.customerId);
              localStorage.setItem("CustomerGroupId", rees.customerGroupId);
              setIsLoading(false);
            })
            .catch((errr) => {
              notify("error", errr.response.data.message);
            });
        })
        .catch((err) => {
          notify("error", err.response.data.message);
          setIsLoading(false);
        });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {isLoading && <Loading />}
      {!isLoading && (
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <h2 className={styles.header}>فرم ورود</h2>

          {step == "phone" && (
            <div className={styles.formBox}>
              <label>شماره تلفن</label>
              <input
                type='text'
                name='phone'
                maxLength='11'
                value={data.phone}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.phone && touch.phone
                    ? styles.unValidate
                    : styles.validate
                }
              />
              {errors.phone && touch.phone && <span>{errors.phone}</span>}
            </div>
          )}
          {step == "code" && (
            <div className={styles.formBox}>
              <label>کد</label>
              <input
                type='password'
                name='password'
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
                className={
                  errors.password && touch.password
                    ? styles.unValidate
                    : styles.validate
                }
              />
              {errors.password && touch.password && (
                <span>{errors.password}</span>
              )}
            </div>
          )}
          <div className={styles.formButtons}>
            <button>ورود</button>
            <Link to='/signup'>ثبت نام</Link>
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default Login;
