import axios from "axios";
import api from "../utils/api";

const ITEMS_PER_PAGE = 4;

export async function getEvents() {
  try {
    const response = await api.get(import.meta.env.EVENTOS_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getEventsTotalPages() {
  try {
    const response = await api.get(import.meta.env.EVENTOS_V1_DEFAULT_VIEW + '/records/count')
    const totalPages = Math.ceil(response.data.count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error(error);
  }
}

export async function getEventsPerPage(page: number) {
  try {
    const response = await api.get(import.meta.env.EVENTOS_V1_DEFAULT_VIEW + '/records', {
      params: {
        limit: ITEMS_PER_PAGE,
        offset: (page - 1) * ITEMS_PER_PAGE,
        fields: 'Id,Evento,Ubicacion,Modalidad,FechaEvento,Imagen', // ADD the op to ask for the ordered rows, based on the date field
        sort: '-FechaEvento'
      }
    })
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 422 ) {
      throw new Error('No existe la pagina solicitada');
    }
    return error;
  }
}


export async function getEventsPerId(id: string) {
  try {
    const response = await api.get(import.meta.env.EVENTOS_V1_DEFAULT_VIEW + '/records/' + id)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400 ) {
      throw new Error('Evento no encontrada');
    } else {
      console.error(error);
      throw new Error('Error al obtener la evento');
    }
  }
}
