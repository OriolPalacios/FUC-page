export interface pageInfo {
  totalRows: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

interface MediaType {
  url: string;
  title: string;
  mimetype: string;
  size: number;
  id: string;
  thumbnails: {
    tiny: { signedUrl: string; };
    small: { signedUrl: string; };
    card_cover: { signedUrl: string; };
  };
  signedUrl: string;
}

interface ImageType extends MediaType {
  width: number;
  height: number;
}

interface pdfType extends MediaType {
  icon: string;
}

interface PaginatedResponse<T> {
  data: T[]; // Lista de elementos
  total: number; // Total de elementos disponibles
  page: number; // Página actual
  totalPages: number; // Total de páginas disponibles
}