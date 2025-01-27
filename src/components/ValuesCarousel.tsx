import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

export default function ValuesCarousel() {
  const values: string[] = [
    "Autonomía",
    "Democracia",
    "Solidaridad",
    "Justicia social",
    "Identidad cultural",
    "Liderazgo",
    "Resiliencia",
    "Compromiso",
    "Innovación",
    "Unidad"
  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
    >
      {values.map((value, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center">
            <p className="w-3/4 bg-red-800 text-center p-3 rounded-xl text-gray-100">{value}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
