import React from "react";

//Images
import store from "../../assets/img/store.png";
import support from "../../assets/img/support.png";
import delivery from "../../assets/img/delivery.png";

//Components
import Services from "../shared/Services";

//Styles
import styles from "./OurServices.module.css";

const OurServices = () => {
  return (
    <div className="container">
      <div className={styles.ourServices}>
        <Services
          title="ارسال رایگان"
          subtitle="برای سفارش های بالای 300 هزار تومان"
          image={delivery}
        />
        <Services
          title="پشتیبانی"
          subtitle="هر روز هفته 24 ساعت شبانه روز"
          image={support}
        />
        <Services
          title="تنوع محصولات"
          subtitle="بیش از 3000 کالای موجود "
          image={store}
        />
      </div>
    </div>
  );
};

export default OurServices;
