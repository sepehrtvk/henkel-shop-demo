import React, { useContext, useEffect, useState } from "react";

//Swiper
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Context
import { ProductsContext } from "../../context/ProductsContextProvider";

//Components
import ProductCard from "../shared/ProductCard";
import AuthContext from "../../context/auth-context";
import { productsAPI } from "../../services/api";
import { notify } from "../../helper/function";

const SpecialOffers = () => {
  const data = useContext(ProductsContext);
  const authCtx = useContext(AuthContext);
  const [specialPro, setspecialPro] = useState([]);

  useEffect(() => {
    productsAPI({
      skip: 0,
      take: 10,
      showInMainPage: true,
      isSpecial: true,
    })
      .then((res) => {
        setspecialPro(res);
      })
      .catch((err) => {
        notify("error", err.response.data.message);
      });
  }, []);

  if (!authCtx.isLoggedIn) return null;

  return (
    <div className='carousel-slider'>
      <div className='title-homepage'>
        <h2>پیشنهادات ویژه</h2>
        <small>Special offers</small>
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
        {specialPro &&
          specialPro.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SpecialOffers;
