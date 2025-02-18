export interface pageInfo {
    totalRows: number;
    page: number;
    pageSize: number;
    isFirstPage: boolean;
    isLastPage: boolean;
}

interface ImageType {
    url: string;
    title: string;
    mimetype: string;
    size: number;
    width: number;
    height: number;
    id: string;
    thumbnails: {
      tiny: { signedUrl: string; };
      small: { signedUrl: string; };
      card_cover: { signedUrl: string; };
    };
    signedUrl: string;
  }