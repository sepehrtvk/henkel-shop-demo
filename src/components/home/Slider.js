import React from "react";
import axios from "axios";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//Styles
import styles from "./Slider.module.css";
const BASE_URL = "http://5.202.179.236:8282/api/PolBannerApp/GetActiveBanners";

const Slider = () => {
  const [banners, setbanners] = React.useState([]);

  React.useEffect(() => {
    const getBanners = async () => {
      const config = {
        method: "get",
        url: BASE_URL,
        headers: {
          apptype: "b2b",
          authorization: "Bearer " + localStorage.getItem("token"),
          language: "fa",
          connection: "keep-alive",
          "x-requested-with": "XMLHttpRequest",
        },
      };
      const response = await axios(config);
      setbanners(response.data);
    };

    getBanners();
  }, []);

  return (
    <Swiper
      className='slider'
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}>
      {banners.map((banner) => (
        <SwiperSlide>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={"http://5.202.179.236:8282/" + banner.mediumURL}
              className={styles.image}
              alt='slider'
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {banner.title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
