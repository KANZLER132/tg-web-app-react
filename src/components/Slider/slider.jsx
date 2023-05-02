import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper";

import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


import photo1 from "./MITSUBIFG201.jpg";
import photo2 from "./MITSUBIFG202.jpg";
import photo3 from "./Mitsubi FG203.jpg";
import photo4 from "./MITSUBIFG204.jpg";
import photo5 from "./MITSUBIFG205.jpg";

const Slider = ({product}) => {
    if (product.title === "MITSUBI FG20T, 2022") {
        return (

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <LazyLoadImage
                            effect={"blur"}
                            src = {photo2}
                            alt = {"..."}
                        />

                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                            effect={"blur"}
                            src = {photo1}
                            alt = {"..."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                            effect={"blur"}
                            src = {photo3}
                            alt = {"..."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                            effect={"blur"}
                            src = {photo4}
                            alt = {"..."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                            effect={"blur"}
                            src = {photo5}
                            alt = {"..."}
                        />
                    </SwiperSlide>


                </Swiper>



        )
    }


}

export default Slider;