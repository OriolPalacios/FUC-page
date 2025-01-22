// src/services/newsService.ts
import type { NewsResponse } from '../types/news';

export async function getNews(page: number = 1, limit: number = 6): Promise<NewsResponse> {
  try {
    // Obtener todos los datos del endpoint
    const response = await fetch(`https://sheetdb.io/api/v1/vojw2fwtn94j3?sheet=Noticias`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    // Calcular los índices para la paginación
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    // Extraer las noticias que corresponden a la página actual
    const paginatedData = data.slice(startIndex, endIndex);

    return {
      data: paginatedData, // Noticias paginadas
      total: data.length,  // Total de noticias
      page,                // Página actual
      totalPages: Math.ceil(data.length / limit), // Total de páginas
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}
