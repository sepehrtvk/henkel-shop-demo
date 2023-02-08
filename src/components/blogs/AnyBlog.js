import React from "react";
import {Link} from "react-router-dom"

//Styles
import styles from "./AnyBlog.module.css";

const AnyBlog = ({data}) => {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="blogs" />
      <div className={styles.text}>
        <h3>{data.title}</h3>
        <p>{data.description.substring(0, 100).concat("...")}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link to={`/blogs/${data.id}`} className={styles.link}>
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
};

export default AnyBlog;
