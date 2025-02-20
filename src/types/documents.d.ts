import { PaginatedResponse } from './common';
import { pdfType } from './common';

export interface Documents {
  ID_Documento: string; // Identificador único de la noticia
  Titulo: string;
  PDF: pdfType[];
}

export interface DocumentsResponse extends PaginatedResponse<Documents> { }

