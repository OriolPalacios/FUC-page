import axios from "axios";
import api from "../utils/api";

export async function getNews() {
  try {
    const response = await api.get(import.meta.env.NOTICIAS_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getNewsPerId(id: string) {
  try {
    const response = await api.get(import.meta.env.NOTICIAS_V1_DEFAULT_VIEW + '/records/' + id)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400 ) {
      throw new Error('Noticia no encontrada');
    } else {
      console.error(error);
      throw new Error('Error al obtener la noticia');
    }
  }
}