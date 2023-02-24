import React from "react";

import { Link } from "react-router-dom";

//Styles
import styles from "./BreadCrumbShop.module.css";

const BreadCrumbShop = ({ filtered, filterHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <div className={styles.routes}>
          <Link to='/'>ورانگر /</Link>
          <span className={styles.pages}>فروشگاه</span>
        </div>
        <div className={styles.sort}>
          مرتب سازی بر اساس :
          <div className={styles.selector}>
            <span
              id='sortBy date'
              className={
                filtered.sortBy === "date" ? styles.active : styles.deactive
              }
              onClick={filterHandler}>
              جدیدترین{" "}
            </span>
            <span
              id='sortBy price'
              className={
                filtered.sortBy === "price" ? styles.active : styles.deactive
              }
              onClick={filterHandler}>
              ارزان ترین{" "}
            </span>
            <span
              id='sortBy sells'
              className={
                filtered.sortBy === "sells" ? styles.active : styles.deactive
              }
              onClick={filterHandler}>
              پرفروش ترین{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbShop;
