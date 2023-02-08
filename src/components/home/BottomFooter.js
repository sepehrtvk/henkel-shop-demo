import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./BottomFooter.module.css";

const BottomFooter = () => {
  return (
    <div className={styles.bottomFooter}>
      <div className='container'>
        <div className={styles.footerLinks}>
          <div>
            <h4>دسترسی سریع</h4>
            <ul>
              <li>
                <Link to='/'>فروشگاه</Link>
              </li>
              <li>
                <Link to='/'>گروه کالا</Link>
              </li>
              <li>
                <Link to='/'>خبرنامه</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>راهنمای خرید</h4>
            <ul>
              <li>
                <Link to='/'>نحوه ثبت سفارش</Link>
              </li>
              <li>
                <Link to='/'>رویه ارسال سفارش</Link>
              </li>
              <li>
                <Link to='/'>شیوه های پرداخت</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>خدمات مشتریان</h4>
            <ul>
              <li>
                <Link to='/'>سوالات متداول</Link>
              </li>
              <li>
                <Link to='/'>شرایط استفاده</Link>
              </li>
              <li>
                <Link to='/'>تماس با ما</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div className='container'>
          <p>تمامی حقوق این وب سایت برای شرکت پاک وش محفوظ است.</p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
