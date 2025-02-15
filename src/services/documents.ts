import api from "../utils/api";
import axios from "axios";

const DOCUMENTS_PER_PAGE = 8;

export async function getDocuments() {
  try {
    const response = await api.get(import.meta.env.DOCUMENTOS_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getDocumentsTotalPages() {
  try {
    const response = await api.get(import.meta.env.DOCUMENTOS_V1_DEFAULT_VIEW + '/records/count')
    const totalPages = Math.ceil(response.data.count / DOCUMENTS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error(error);
  }
}

export async function getDocumentsPerPage(page: number) {
  try {
    const response = await api.get(import.meta.env.DOCUMENTOS_V1_DEFAULT_VIEW + '/records', {
      params: {
        limit: DOCUMENTS_PER_PAGE,
        offset: (page - 1) * DOCUMENTS_PER_PAGE,
        fields: 'Id,Noticia,Resumen,Categoria,Imagenes,CreatedAt,Autor' // TODO: replace with the actual data that is retrieved
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

export async function getDocumentPerId(id: string) {
  try {
    const response = await api.get(import.meta.env.DOCUMENTOS_V1_DEFAULT_VIEW + '/records/' + id)
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 400 ) {
      throw new Error('Documento no encontrado');
    } else {
      console.error(error);
      throw new Error('Error al obtener el documento');
    }
  }
}