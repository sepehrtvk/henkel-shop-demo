import React, { useContext, useEffect, useState } from "react";

//Swiper
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { notify } from "../../helper/function";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { productsAPI } from "../../services/api";
//Context
import { ProductsContext } from "../../context/ProductsContextProvider";

//Components
import ProductCard from "../shared/ProductCard";

const LatestProducts = () => {
  const [lastproducts, setlastproducts] = useState([]);

  useEffect(() => {
    productsAPI({
      skip: 0,
      take: 10,
      showInMainPage: false,
    })
      .then((res) => {
        setlastproducts(res);
      })
      .catch((err) => {
        notify("error", err.response.data.message);
      });
  }, []);
  return (
    <div className='carousel-slider'>
      <div className='title-homepage'>
        <h2>جدیدترین محصولات</h2>
        <small>Latest Products</small>
      </div>
      <Swiper
        breakpoints={{
          990: {
            width: 990,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          360: {
            width: 350,
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        autoplay={true}
        loop={true}
        rtl={"true"}>
        {lastproducts &&
          lastproducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default LatestProducts;
