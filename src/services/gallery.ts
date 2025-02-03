import api from "../utils/api";

export async function getGallery() {
  try {
    const response = await api.get(import.meta.env.GALERIA_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}