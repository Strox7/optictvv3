export interface simipleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;

  titleImage: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  smallDescription: string;
}

export interface mapData {
  currentSlug: string;
  _updatedAt: string;
}
