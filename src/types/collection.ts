export type ProductCollection = {
  id: string;
  titleKey: string;
  subtitleKey?: string;
  image: {
    src: string;
    alt?: string;
  };
  slug: string;
};
