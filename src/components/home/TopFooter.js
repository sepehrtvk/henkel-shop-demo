import React from "react";

//Styles
import styles from "./TopFooter.module.css";

//Images
import logo from "../../assets/img/logo.png";
import kasbokar from "../../assets/img/kasbokar.png";
import enamad from "../../assets/img/enamad.png";

const TopFooter = () => {
  return (
    <div className='container'>
      <div className={styles.topFooter}>
        <div className={styles.right}>
          <img width={"100px"} src={logo} alt='logo' />
          <p>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد{" "}
          </p>
          <div className={styles.socialMedia}>
            <a href='/' target='_blank' className={styles.whatsapp}>
              واتساپ
              <i className='fab fa-whatsapp'></i>
            </a>
            <a href='/' target='_blank' className={styles.instagram}>
              اینستاگرام
              <i className='fab fa-instagram'></i>
            </a>
            <a href='/' target='_blank' className={styles.telegram}>
              تلگرام
              <i className='fab fa-telegram-plane'></i>
            </a>
          </div>
        </div>
        <div className={styles.left}>
          <h4>عضویت در خبرنامه</h4>
          <div className={styles.news}>
            <input type='email' placeholder='ایمیل خود را وارد کنید...' />
            <button>ثبت</button>
          </div>
          <div className={styles.namad}>
            <img src={kasbokar} alt='kasbokar' />
            <img src={enamad} alt='enamd' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
