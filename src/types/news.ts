// src/types/news.ts
export interface News {
    id: number;
    title: string;
    content: string;
    image_url: string;
    author: string;
    published_date: string;
    category: string;
  }
  
  export interface NewsResponse {
    data: News[];
    total: number;
    page: number;
    totalPages: number;
  }