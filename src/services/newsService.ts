// src/services/newsService.ts
import type { NewsResponse } from '../types/news';

export async function getNews(page: number = 1, limit: number = 6): Promise<NewsResponse> {
  try {
    const response = await fetch(`https://sheetdb.io/api/v1/vojw2fwtn94j3?sheet=Eventos?page=${page}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}