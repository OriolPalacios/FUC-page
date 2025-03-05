import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
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
  const secretariesData = {
    "Secretaria De Economía": { logo: 'test' },
    "Secretario De Actas Y Archivos": { logo: 'test' },
    "Secretaría De Asuntos Académicos": { logo: 'test' },
    "Secretaría De Prensa, Propaganda Y Convocatoria": { logo: 'test' },
    "Secretaría De Asistencia Social Y Bienestar Universitario": { logo: 'test' },
    "Secretaría De Cultura, Deporte Y Recreación": { logo: 'test' },
    "Secretaría De Proyección Social": { logo: 'test' },
    "Secretaría De Logística, Infraestructura Y Equipamiento De Facultades": { logo: 'test' },
    "Secretaría De Investigación Y Asuntos Tecnológicos": { logo: 'test' },
    "Secretaría De Defensa Estudiantil": { logo: 'test' },
    "Secretaría De Emprendimiento": { logo: 'test' },
    "Secretaría De Instrucción": { logo: 'test' },
    "Secretaría Anticorrupción": { logo: 'test' },
    "Secretaría De Género Y Diversidades": { logo: 'test' },
    "Secretaría Del Medio Ambiente": { logo: 'test' },
    "Secretaría De Articulación Con Los Gremios": { logo: 'test' },
    "Secretaría De Relaciones Públicas E Interinstitucionales": { logo: 'test' },
    "Secretaría De Defensa De Estudiantes Con Discapacidad": { logo: 'test' },
  };

  const secretaries = Object.keys(secretariesData).map(name => ({ name }));
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
              <h3 className='mb-5 md:text-lg md:font-bold font-serif lg:text-3xl text-center'>Ingrese la escuela profesional a la que pertenece y su correo:</h3>
              <label className='flex flex-col text-white/50 p-2 bg-red-900 lg:w-1/2'>
                <span className='text-sm'>Escuela Profesional:</span>
                <input type="text" name="name" className='border bg-transparent text-lg px-1 mt-1 outline-none focus:outline-none border-l-0 border-r-0 border-t-0 border-b-1 text-white placeholder-white/50 placeholder:italic md:text-xl lg:text-2xl' placeholder='Su escuela profesional' required />
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
      </form>
    </>
  );
}