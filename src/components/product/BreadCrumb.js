import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./BreadCrumb.module.css";

const BreadCrumb = ({ type, category, title }) => {
  return (
    <div className={styles.breadcrumb}>
      <Link to='/'>ورانگر / </Link>
      <Link to='/'>{type} / </Link>
      <Link to='/'>{category} / </Link>
      <span>{title}</span>
    </div>
  );
};

export default BreadCrumb;
