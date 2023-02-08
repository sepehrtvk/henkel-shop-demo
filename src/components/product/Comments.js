import React from "react";

//Styles
import styles from "./Comments.module.css";

const Comments = () => {
  return (
    <div className={styles.comments}>
      <h3>نظرات</h3>
      <div className={styles.allComments}>
        هیچ نظری برای این محصول ارسال نشده است.
      </div>
      <form className={styles.sendComments}>
        <div className={styles.rate}>
          <p>امتیاز شما :</p>
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <div className={styles.field}>
          <input type="text" placeholder="نام و نام خانوادگی..." />
        </div>
        <div className={styles.field}>
          <input type="email" placeholder="پست الکترونیکی..." />
        </div>
        <textarea cols="30" rows="5" placeholder="نظر شما..."></textarea>
        <div className={styles.button}>
          <button type="submit">ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default Comments;
