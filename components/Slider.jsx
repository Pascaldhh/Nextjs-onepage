"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import { useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Slider({ children }) {
  useEffect(() => console.log(children), []);

  return (
    <Swiper
      speed={700}
      autoHeight={true}
      mousewheel={true}
      direction={'vertical'}
      modules={[Pagination, Autoplay, Mousewheel]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay
    >
      {children.map((item, i) => 
        <SwiperSlide key={i}>{item}</SwiperSlide>
      )}
    </Swiper>
  )
}
