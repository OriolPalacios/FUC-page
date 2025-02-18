import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "@components/swiperUtilities/SwipperNavButtons";

import user from '@assets/user.png';

import 'swiper/css';
import 'swiper/css/effect-cards';
import '@styles/swiperOverrides.css';

import { EffectCards } from 'swiper/modules';
import type { Members } from "@customTypes/members";

export default function JuntaDirectivaSwiper({
  boardMembers
}: {
  boardMembers: Members[]
}) {
  return (
    <div className="w-1/2 md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] h-[200px] lg:mt-12 mx-auto ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
      >
        {boardMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-red-800 h-[230px] md:h-[350px] lg:h-[350px] lg:h-full mx-auto flex flex-col justify-evenly items-center rounded-xl">
              <div>
              <h4 className='text-center md:text-xl lg:text-xl lg:italic font-serif text-white'>{member.Cargo}</h4>
              <h4 className='text-center md:text-2xl lg:text-2xl font-serif mb-2 text-white'>{member.Nombre} {member.Apellido}</h4>
              </div>
              <img src={member.Foto[0].signedUrl} alt={member.Nombre} className="w-1/2 md:w-[200px] md:max-h-[250px] md:rounded-xl mx-auto object-contain" />
            </div>
          </SwiperSlide>
        ))}
        <div className="hidden lg:block">
          <SwiperNavButtons />
        </div>
      </Swiper >
    </div >
  )
}
