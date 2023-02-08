import React from "react";

//Styles
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formBox}>
      <h3>فرم تماس با ما</h3>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">نام و نام خانوادگی</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">شماره تماس</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="email">ایمبل</label>
            <input type="email" id="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="subject">موضوع</label>
            <input type="text" id="subject" />
          </div>
        </div>
        <textarea cols="30" rows="5" placeholder="پیام شما ..."></textarea>
        <div className={styles.button}>
          <button className={styles.submit}>ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
