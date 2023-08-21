export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
};

export type PostItems = {
  [key: string]: string;
};
