// src/types/news.ts
import { ImageType } from "./common";

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

export interface NewsResponse extends PaginatedResponse<News> {}

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