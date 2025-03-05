import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from "swiper/modules";
import type { Members } from "@customTypes/members";

export default function detailSecretariasSwiper({
  activeSecretaria,
  actualMembers,
  secretaryInfo,
  closeModal
}: {
  activeSecretaria: string,
  actualMembers: Members[] | void,
  secretaryInfo: string[],
  closeModal: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-serif p-5">
      <div className="bg-white rounded w-full lg:w-[800px] shadow-xl shadow-gray-8 00 mx-auto rounded-xl overflow-hidden pb-2">
        <div className="header bg-red-900 flex flex-row items-center justify-center py-4 px-5 justify-between ">
          <div className='logo-container w-8 h-8 md:w-16 md:h-16 rounded-full bg-gray-200'>

          </div>
          <h3 className="text-lg md:text-2xl text-white font-bold text-center">{activeSecretaria}</h3>
          <div
            className="mr-2 w-6 h-6 relative cursor-pointer"
            onClick={closeModal}
          >
            <div className="absolute w-full h-1 bg-white rotate-45 top-1/2 left-0 transform -translate-y-1/2"></div>
            <div className="absolute w-full h-1 bg-white -rotate-45 top-1/2 left-0 transform -translate-y-1/2"></div>
          </div>
        </div>
        <div className="content py-2 px-10">
            <p className="text-center md:text-xl font-bold mb-5">Miembros de {activeSecretaria}</p>
          <div>
            {actualMembers ? (
              <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
              >
                {actualMembers.map((member, index) => (
                  <SwiperSlide>
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-[150px] h-[200px] md:w-[200px] mb-10 md:mb-20">
                        <img src={member.Foto[0].signedUrl} alt={`image of ${member.Nombre} ${member.Apellido}`} className="w-fit h-fit"/>
                      </div>
                      <p className="text-sm">{member.Cargo}</p>
                      <p className="text-lg md:text-xl font-bold">{member.Nombre} {member.Apellido}</p>
                      <p className="text-sm md:text-md w-1/2 italic text-center">{member.Contacto}</p>
                      <p className="text-sm md:text-md w-1/2 italic text-center">{member.Telefono}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <li className="text-center text-red-500">Hubo un error con la base de datos. Por favor, vuelva más tarde.</li>
            )}
          </div>
          <div className="responsibilities mt-5 md:w-3/4 mx-auto">
            <h4 className="text-lg md:text-xl font-bold mb-2 md:text-center">Responsabilidades</h4>
            <ul className="list-disc list-inside">
              <li className="md:text-lg" key='responsabilidad-1'>{secretaryInfo[0]}</li>
              <li className="md:text-lg" key='responsabilidad-2'>{secretaryInfo[1]}</li>
              <li className="md:text-lg" key='responsabilidad-3'>{secretaryInfo[2]}</li>
            </ul>
          </div>
          <div className="fixed-contact mt-5 md:w-3/4 mx-auto">
            <h4 className="text-lg font-bold mb-2 text-center md:text-gray-600">Contacto Fijo</h4>
            <p className="text-sm md:text-md md:text-center md:text-gray-600">Email: {secretaryInfo[3]}</p>
            <p className="text-sm md:text-md md:text-center md:text-gray-600">Teléfono: {secretaryInfo[4]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
