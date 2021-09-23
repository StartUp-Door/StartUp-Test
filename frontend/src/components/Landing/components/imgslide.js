
import React,{useEffect,useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import  fimg1 from '../images/Cus.jpg';
import  fimg2 from '../images/Ban1.jpg';
import  fimg3 from '../images/Cus2.jpg';
import  fimg4 from '../images/Cus3.jpg';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"


import "./imgslide.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


export default function imgslide() {
  return (
    <>
    <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
  "shadow": true,
  "slideShadows": true,
  "shadowOffset": 20,
  "shadowScale": 0.94
}} pagination={true} className="mySwiper">
   <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
   <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
   <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
   <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
  </Swiper>
 
    </>
  )
}