import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./autoslide.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Autoslide() {
  
  
  
  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide><img src="http://www.dailynews.lk/sites/default/files/news/2020/07/12/T%26C-p22-Explore01.jpg" /></SwiperSlide>
  <SwiperSlide><img src="https://www.smehorizon.com/wp-content/uploads/2019/05/adb_wefi.jpg"/></SwiperSlide>
  <SwiperSlide> <img src="https://www.woodfield.lk/wp-content/uploads/2018/09/pantry-cupboards-pantry-cupboard-designs-pantry-designs-door-design-windows-and-doors-furniture-kitchen-pantry-6-1.jpg"/></SwiperSlide>
  <SwiperSlide><img src="https://imagevars.gulfnews.com/2019/02/03/SU_190204_Sri_Lanka_food_lead_resources1_16a4a1581c5_large.jpg"/></SwiperSlide>
  <SwiperSlide><img src="http://globalsrilankan.com/wp-content/uploads/2018/08/tobacco-sri-lanka-640x381.jpg"/></SwiperSlide>
  <SwiperSlide><img src="https://wphfund.org/wp-content/uploads/2017/08/SriLanka_WorldBank_119-1350x900.jpg"/></SwiperSlide>
  <SwiperSlide><img src="https://i.ytimg.com/vi/JTID2iACBVA/maxresdefault.jpg"/></SwiperSlide>
  </Swiper>
    </>
  )
}