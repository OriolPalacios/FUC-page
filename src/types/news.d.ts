// src/types/news.ts

export interface News {
  ID_Noticia: string; // Identificador único de la noticia
  Titulo: string; // Título de la noticia
  Contenido: string; // Descripción o cuerpo del contenido
  Fecha_Publicacion: string; // Fecha de publicación de la noticia
  Autor: string; // Nombre del autor de la noticia
  Categoria: string; // Categoría a la que pertenece la noticia
  Estado: string; // Estado de publicación (ej. Publicado, Borrador)
  Responsable: string; // Persona responsable de gestionar la noticia
}

export interface NewsResponse {
  data: News[]; // Lista de noticias
  total: number; // Total de noticias disponibles
  page: number; // Página actual
  totalPages: number; // Total de páginas disponibles
}

interface ImageType {
  url: string;
  title: string;
  mimetype: string;
  size: number;
  width: number;
  height: number;
  id: string;
  thumbnails: {
    tiny: { signedUrl: string; };
    small: { signedUrl: string; };
    card_cover: { signedUrl: string; };
  };
  signedUrl: string;
}

export interface NewsItem {
  Id: number;
  Noticia: string;
  Resumen: string;
  Contenido: string;
  Categoria: string;
  Imagenes: ImageType[];
  CreatedAt: string;
  Autor: string;
}