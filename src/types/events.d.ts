import { ImageType } from "./common";

export interface Events {
    ID_Evento: string; // Identificador único del evento
    Evento: string; // Nombre del evento
    Modalidad: string; // Modalidad del evento (ej. Presencial, Virtual)
    FechaEvento: string; // Fecha del evento
    Ubicacion: string; // Ubicación del evento
    Imagen: ImageType[]; // Imágenes relacionadas con el evento
}

export interface EventsResponse extends PaginatedResponse<Events> {}

export interface EventsItem {
    Id: number;
    Evento: string;
    Modalidad: string;
    Contenido: string;
    Imagen: ImageType[];
    FechaEvento: string;
    Ubicacion: string;
    CreatedAt: string;
    Autor: string;
}