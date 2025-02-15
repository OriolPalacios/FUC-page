import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "@components/swiperUtilities/SwipperNavButtons";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@styles/swiperOverrides.css'

import business from '@assets/business.png';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SecretariaSwiper() {
  return (
    <div className="w-full md:w-3/4 h-[200px] md:h-[fit] lg:mt-12 mx-auto mb-12 md:mb-32">
      <Swiper
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={'auto'}
        centeredSlides={true}
        grabCursor={true}
        className="secretariaSwiper"
      >
        <SwiperSlide>
          <div className="bg-red-800 h-[200px] md:h-[250px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Secretaria 1</h4>
            <img src={business.src} alt="" className=" w-3/4 md:w-1/2 invert mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-red-800 h-[200px] md:h-[250px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Secretaria 2</h4>
            <img src={business.src} alt="" className=" w-3/4 md:w-1/2 invert mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-red-800 h-[200px] md:h-[250px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Secretaria 3</h4>
            <img src={business.src} alt="" className=" w-3/4 md:w-1/2 invert mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-red-800 h-[200px] md:h-[250px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Secretaria 4</h4>
            <img src={business.src} alt="" className=" w-3/4 md:w-1/2 invert mx-auto" />
          </div>
        </SwiperSlide>
        <div className="hidden lg:block">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </div>
  );
}