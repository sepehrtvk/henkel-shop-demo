import React from "react";
import axios from "axios";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//images slider
import image1 from "../../assets/img/1.jpg";
import image2 from "../../assets/img/2.jpg";
import image3 from "../../assets/img/3.jpg";

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
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwidXNlcm5hbWUiOiJlYTM0NTFjNC1lYWZiLTRlMDUtODYyNS00ODc0NWU4NWFiZDMiLCJ1c2Vya2V5IjoiMDkxMjA1MzIxMjYiLCJhbGlhcyI6Itiz2b7Zh9ixINiz2b7Zh9ixIiwibmJmIjoxNjc1Njc2NTMzLCJleHAiOjE2NzgwOTU3MzMsImlhdCI6MTY3NTY3NjUzMywiaXNzIjoiaHR0cDovLzc3LjIzOC4xMjMuMTA6MTIzNjciLCJhdWQiOiJhcHBVc2VyIn0.IPYe0bHD09oRS5uaLqVeN_Ejsx2KCOlGyU-hrZ0-Fr0",
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
