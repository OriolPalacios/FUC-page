import api from "../utils/api";

export async function getEvents() {
  try {
    const response = await api.get(import.meta.env.EVENTOS_V1_DEFAULT_VIEW + '/records')
    return response.data;
  } catch (error) {
    console.error(error);
  }
}