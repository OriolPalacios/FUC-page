import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { SwiperNavButtons } from '@components/swiperUtilities/SwipperNavButtons';
import { navigate } from 'astro/virtual-modules/transitions-router.js';
import { useState } from 'react';

export default function ConsultsFormCarousel() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget) as any;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => navigate('/SubmissionSuccess'))
      .catch((error) => {
        alert(error)
        setLoading(false);
      });
    console.log('this shoudl end')
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} method='POST' data-netlify='true'>
        {
          loading && (
            <div className='loader'>
              Loading...
            </div>
          )
        }
        {
          !loading && (
            <Swiper
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide >
                <div className='flex flex-col justify-center items-center gap-4'>
                  <h3 className='mb-5 md:text-lg md:font-bold font-serif lg:text-3xl text-center'>Ingrese la escuela profesional a la que pertenece y su correo:</h3>
                  <label className='flex flex-col text-white/50 p-2 bg-red-900 lg:w-1/2'>
                    <span className='text-sm'>Escuela Profesional:</span>
                    <input type="text" name="EscuelaProfesional" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic md:text-xl lg:text-2xl' placeholder='Su escuela profesional' required />
                  </label>
                  <label className='flex flex-col text-white/50 p-2 bg-red-900 lg:w-1/2'>
                    <span className='text-sm'>Correo Electronico:</span>
                    <input type="email" name="email" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic md:text-xl lg:text-2xl' placeholder='Su correo' required />
                  </label>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col justify-center items-center'>
                  <h3 className='mb-4 md:text-xl font-serif lg:text-3xl'>Escriba su consulta/denuncia:</h3>
                  <textarea
                    name="contenidoConsulta"
                    maxLength={1000}
                    className='h-[200px] max-h-[200px] lg:h-[300px] lg:w-3/4 lg:max-h-[400px] w-5/6 md:text-xl lg:text-2xl lg:p-5 bg-red-800/80 outline-none focus:outline-none border-0 focus:rounded-xl transition-all p-2 text-white placeholder-white/50 placeholder:italic'
                    placeholder='Escriba su consulta aquí'
                    required
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex flex-col justify-center items-center min-h-[200px] lg:min-h-[300px]'>
                  <div className='h-fit w-fit rounded' id='send-consult-btn'>
                    <button
                      type="submit"
                      className={`p-2 lg:p-5 border-0  text-white`}
                    >
                      <span className={`font-serif font-bold text-xl`}>Enviar</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperNavButtons />
            </Swiper>

          )
        }
      </form>
    </>
  );
}