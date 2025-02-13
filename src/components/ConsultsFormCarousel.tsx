import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { SwiperNavButtons } from '@components/swiperUtilities/SwipperNavButtons';
import { useState } from 'react';
import { navigate } from 'astro/virtual-modules/transitions-router.js';

export default function ConsultsFormCarousel() {
  const [currentSecretaryIndex, setCurrentSecretaryIndex] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget) as any;
    formData.append('secretaria', secretaries[currentSecretaryIndex].name);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => navigate('/SubmissionSuccess'))
      .catch((error) => alert(error));
    console.log(new URLSearchParams(formData).toString());
  };
  const secretaries = [
    {
      name: 'Secretaria 1',
      // logo: aLogo
    },
    {
      name: 'Secretaria 2',
      // logo: aLogo
    },
    {
      name: 'Secretaria 3',
      // logo: aLogo
    }
  ];
  return (
    <>
      <form action="" onSubmit={handleSubmit} method='POST' data-netlify='true'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <h3 className='text-center md:text-xl md:font-serif lg:text-3xl md:font-bold'>Seleccione una secretaria:</h3>
            <div className='flex flex-col justify-center items-center'>
              <Swiper
                nested={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                direction={'horizontal'}
                onSlideChange={(swiper) => setCurrentSecretaryIndex(swiper.activeIndex)}
                className='flex flex-col justify-center items-center w-full w-1/4 h-[200px] lg:mt-12'
              >
                {
                  secretaries.map((secretary, index) => (
                    <SwiperSlide key={index}>
                      <div className='flex flex-col justify-center items-center'>
                        <h3 className='md:text-lg font-bold lg:text-2xl'>{secretary.name}</h3>
                        <div className='w-20 h-20 md:w-32 md:h-32 bg-red-800 rounded-full'></div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex flex-col justify-center items-center gap-4'>
              <h3 className='mb-5 md:text-lg md:font-bold font-serif lg:text-3xl'>Ingrese su nombre y correo:</h3>
              <label className='flex flex-col text-white/50 p-2 bg-red-900 lg:w-1/2'>
                <span className='text-sm'>Nombre:</span>
                <input type="text" name="name" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic md:text-xl lg:text-2xl' placeholder='Su nombre' />
              </label>
              <label className='flex flex-col text-white/50 p-2 bg-red-900 lg:w-1/2'>
                <span className='text-sm'>Correo Electronico:</span>
                <input type="email" name="email" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic md:text-xl lg:text-2xl' placeholder='Su correo' />
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='mb-4 md:text-xl font-serif lg:text-3xl'>Escriba su consulta:</h3>
              <textarea
                name="contenidoConsulta"
                maxLength={1000}
                className='h-[200px] max-h-[200px] lg:h-[300px] lg:w-3/4 lg:max-h-[400px] w-5/6 md:text-xl lg:text-2xl lg:p-5 bg-red-800/80 outline-none focus:outline-none border-0 focus:rounded-xl transition-all p-2 text-white placeholder-white/50 placeholder:italic'
                placeholder='Escriba su consulta aquí'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center min-h-[200px] lg:min-h-[300px]'>
              <button
                type="submit"
                className='p-2 lg:p-5 border rounded bg-gray-950 text-white lg:hover:scale-150 transition-all'
              >
                <span className='font-serif font-bold text-xl '>Enviar Consulta</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </form>
    </>
  );
}