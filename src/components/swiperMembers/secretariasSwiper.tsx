import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "@components/swiperUtilities/SwipperNavButtons";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '@styles/swiperOverrides.css'

import business from '@assets/business.png';

import { EffectCoverflow } from 'swiper/modules';
import type { Members } from '@customTypes/members';
import DetailSecretariasSwiper from './detailSecretariasSwiper';

export default function SecretariaSwiper({
  secretariasData
}: {
  secretariasData: Record<string, Members[] | void>
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSecretaria, setActiveSecretaria] = useState<string | null>(null);

  const openModal = (secretaria: string) => {
    setActiveSecretaria(secretaria);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveSecretaria(null);
  };

  return (
    <>
      <div className="w-full h-[250px] md:h-fit lg:mt-12 mx-auto mb-12 md:mb-32 relative">
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
          {Object.keys(secretariasData).map((secretaria) => (
            <SwiperSlide key={secretaria}>
              <div className="bg-red-800 h-[270px] md:w-[300px] lg:w-[400px] lg:h-[330px] md:px-2 mx-auto flex flex-col justify-evenly items-center rounded-xl">
                <h4 className='text-center md:text-xl lg:text-2xl font-serif py-1 text-white'>{secretaria}</h4>
                <img src={business.src} alt={secretaria} className="w-1/2 md:w-1/2 invert mx-auto" />
                <button
                  type="button"
                  onClick={() => openModal(secretaria)}
                  className="rounded bg-gray-900 text-white p-2 mb-3 md:text-lg"
                >
                  Saber mas
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="hidden lg:block">
            <SwiperNavButtons />
          </div>
        </Swiper>

        {modalOpen && activeSecretaria && (
          <DetailSecretariasSwiper activeSecretaria={activeSecretaria} actualMembers={secretariasData[activeSecretaria]} closeModal={closeModal} />
        )}
      </div>
    </>
  )
}
