import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { SwiperNavButtons } from '@components/swiperUtilities/SwipperNavButtons';
import { useState } from 'react';

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
      .then(() => console.log('Form successfully submitted'))
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
          className=''
        >
          <SwiperSlide>
            <h3 className='text-center'>Seleccione una secretaria:</h3>
            <div className='flex flex-col justify-center items-center'>
              <Swiper
                nested={true}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                direction={'horizontal'}
                onSlideChange={(swiper) => setCurrentSecretaryIndex(swiper.activeIndex)}
                className='flex flex-col justify-center items-center w-full w-1/4 h-[200px]'
              >
                {
                  secretaries.map((secretary, index) => (
                    <SwiperSlide key={index}>
                      <div className='flex flex-col justify-center items-center'>
                        <h3>{secretary.name}</h3>
                        <div className='w-20 h-20 bg-red-800 rounded-full'></div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className='flex flex-col justify-center items-center gap-4'>
              <h3 className='mb-5'>Ingrese su nombre y correo:</h3>
              <label className='flex flex-col text-white/50 p-2 bg-red-900'>
                <span className='text-sm'>Nombre:</span>
                <input type="text" name="name" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic' placeholder='Su nombre' />
              </label>
              <label className='flex flex-col text-white/50 p-2 bg-red-900'>
                <span className='text-sm'>Correo Electronico:</span>
                <input type="email" name="email" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic' placeholder='Su correo' />
              </label>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center'>
              <h3>Escriba su consulta:</h3>
              <textarea
                name="contenidoConsulta"
                maxLength={1000}
                className='h-[200px] max-h-[200px] w-5/6 bg-red-800/80 outline-none focus:outline-none border-0 focus:rounded-xl transition-all p-2 text-white placeholder-white/50 placeholder:italic'
                placeholder='Escriba su consulta aquí'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center min-h-[200px]'>
              <button
                type="submit"
                className='p-2 border rounded bg-gray-950 text-white hover:bg-white hover:text-red-800 transition-all'
              >
                <span className='font-serif font-bold'>Enviar Consulta</span>
              </button>
            </div>
          </SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </form>
    </>
  );
}