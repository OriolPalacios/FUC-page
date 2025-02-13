import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  return (
    <div className="swiper-nav-buttons flex justify-center gap-4 mt-5">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className={`bg-red-800 text-white p-2 rounded ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={swiper.isBeginning}
      >
        Anterior
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className={`bg-red-800 text-white p-2 rounded ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={swiper.isEnd}
      >
        Siguiente
      </button>
    </div>
  );
}