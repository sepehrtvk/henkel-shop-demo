import React from "react";

import { Link } from "react-router-dom";

//Styles
import styles from "./BreadcrumbBlog.module.css";

const BreadcrumbBlogs = ({ blog }) => {
  return (
    <div className={styles.breadcrumb}>
      <Link to='/home'>کلوشاپ</Link>
      <Link to='/blogs'>/ مقالات</Link>
      <span>/ {blog}</span>
    </div>
  );
};

export default BreadcrumbBlogs;
