import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function InstitutionFunctionSlider() {
  type ContentType = {
    title: string;
    content: string;
  };

  const values: ContentType[] = [
    {
      title: "Defensa de la autonomía universitaria",
      content: "La FUC lucha por garantizar la independencia de la universidad frente a intervenciones externas, asegurando que las decisiones académicas y administrativas se tomen de manera autónoma."
    },
    {
      title: "Promoción del cogobierno universitario",
      content: "Impulsa la participación de estudiantes, docentes y egresados en la toma de decisiones universitarias mediante un sistema democrático e inclusivo."
    },
    {
      title: "Representación estudiantil",
      content: "Actúa como la voz colectiva de los estudiantes en foros universitarios, locales, regionales y nacionales, defendiendo sus derechos e intereses."
    },
    {
      title: "Organización de jornadas de lucha",
      content: "Coordina movilizaciones y actividades para reclamar mejoras en la calidad educativa y en las condiciones de la universidad."
    },
    {
      title: "Contribución al cambio social",
      content: "Participa en iniciativas que benefician a la sociedad cusqueña, fomentando el desarrollo de políticas públicas y soluciones a problemas locales."
    },
    {
      title: "Fortalecimiento de la identidad cultural",
      content: "Promueve el respeto y la revalorización del patrimonio histórico y cultural del Cusco como parte de su rol en la formación integral de los estudiantes."
    },
    {
      title: "Reconstrucción y resiliencia",
      content: "Apoya a la comunidad universitaria y local en momentos de crisis, como se evidenció tras el terremoto de 1950, siendo un actor clave en los procesos de recuperación."
    },
    {
      title: "Participación en debates nacionales",
      content: "Dinamiza la vida universitaria generando discursos y propuestas en torno a los problemas educativos y sociales a nivel nacional."
    }
  ];

  return (
    <Swiper pagination={true} modules={[Pagination]} >
      {values.map((value, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col justify-center items-center mb-4">
            <p>{value.title}</p>
            <p className="w-3/4 text-center p-3 rounded-xl text-justify">{value.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
