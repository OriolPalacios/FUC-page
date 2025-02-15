import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "@components/swiperUtilities/SwipperNavButtons";

import user from '@assets/user.png';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import '@styles/swiperOverrides.css';

import { EffectCards, Navigation } from 'swiper/modules';


export default function JuntaDirectivaSwiper() {
  return (
    <div className="w-1/2 md:w-1/4 lg:w-[250px] h-[200px] md:h-fit lg:mt-12 mx-auto ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        <SwiperSlide>
          <div className="w-full bg-red-800 h-[200px] md:h-[250px] lg:h-[300px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Presidente</h4>
            <img src={user.src} alt="" className="filter invert mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-red-800 h-[200px] md:h-[250px] lg:h-[300px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Vicepresidente</h4>
            <img src={user.src} alt="" className="filter invert mx-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-red-800 h-[200px] md:h-[250px] lg:h-[300px] mx-auto flex flex-col justify-center items-center rounded-xl">
            <h4 className='text-center md:text-xl lg:text-2xl font-serif mb-2 text-white'>Coordinador Principal</h4>
            <img src={user.src} alt="" className="filter invert mx-auto" />
          </div>
        </SwiperSlide>
        <div className="hidden lg:block">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </div>
  )
}